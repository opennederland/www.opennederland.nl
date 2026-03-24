import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

export default function initNetworkGraph({ 
    containerId, 
    focusId, 
    focusTags = [], 
    jsonUrl = "/network.json" 
}) {
  document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById(containerId);
    if (!container) return;

    const graphDiv = container.querySelector('.graph-container');
    const loadingEl = container.querySelector(".graph-loading");
    
    let width = graphDiv.clientWidth;
    let height = graphDiv.clientHeight;
    let center = { x: width / 2, y: height / 2 };

    const config = {
      defaultColor: "#94a3b8",
      radii: { 
          person: 70,    
          org: 200,      
          platform: 280, 
          init: 350,     
          event: 350,  
          tag: 450       
        }
    };
    
    const getType = (d) => {
      if (d.group === 'tag') return 'tag';
      if (d.type === 'persoon') return 'person';
      if (d.type === 'initiative' || d.type === 'licentie') return 'init';
      if (d.type === 'event') return 'event';
      if (['organisatie', 'Stichting', 'Vereniging'].includes(d.type)) return 'org';
      return 'platform'; 
    };

    const svg = d3.select(graphDiv).append("svg")
        .attr("width", "100%").attr("height", "100%")
        .attr("viewBox", [0, 0, width, height])
        .style("cursor", "grab").style("touch-action", "none");

    const g = svg.append("g");
    
    const ringSizes = [config.radii.org, config.radii.platform, config.radii.init, config.radii.tag];
    g.append("g").attr("class", "zones").selectAll("circle").data(ringSizes).join("circle")
      .attr("class", "zone-ring").attr("cx", center.x).attr("cy", center.y).attr("r", d => d);

    const zoom = d3.zoom().scaleExtent([0.1, 5]).on("zoom", ({transform}) => g.attr("transform", transform));
    svg.call(zoom).on("dblclick.zoom", null);

    d3.json(jsonUrl).then(function(data) {
      if(loadingEl) loadingEl.remove();

      const nodes = data.nodes.map(d => ({...d, zoneType: getType(d)}));
      const nodeMap = new Map(nodes.map(d => [d.id, d]));
      const links = data.links.map(d => ({...d})).filter(l => nodeMap.has(l.source) && nodeMap.has(l.target));

      const neighbors = {};
      links.forEach(l => {
        if (!neighbors[l.source]) neighbors[l.source] = [];
        if (!neighbors[l.target]) neighbors[l.target] = [];
        neighbors[l.source].push(l.target);
        neighbors[l.target].push(l.source);
      });

      nodes.forEach(n => { n.visible = false; n.collapsed = true; });

      let activeMode = "DEFAULT"; 
      const activeTagIds = focusTags.map(t => "tag-" + t);
      
      if (focusId && nodeMap.has(focusId)) activeMode = "FOCUS";
      else if (activeTagIds.length > 0 && activeTagIds.some(id => nodeMap.has(id))) activeMode = "TAGS";

      if (activeMode === "FOCUS") {
          const target = nodeMap.get(focusId);
          target.visible = true; target.isCurrent = true;
          target.x = center.x; target.y = center.y; target.fx = center.x; target.fy = center.y; 
          (neighbors[focusId]||[]).forEach(pid => { if(nodeMap.get(pid)) nodeMap.get(pid).visible = true; });
          nodes.forEach(n => {
              if (activeTagIds.includes(n.id)) {
                  n.visible = true; n.collapsed = false;
                  (neighbors[n.id]||[]).forEach(pid => { if(nodeMap.get(pid)) nodeMap.get(pid).visible = true; });
              }
          });
      } else if (activeMode === "TAGS") {
          nodes.forEach(n => {
              if (activeTagIds.includes(n.id)) {
                  n.visible = true; n.collapsed = false;
                  (neighbors[n.id]||[]).forEach(pid => { if(nodeMap.get(pid)) nodeMap.get(pid).visible = true; });
              }
          });
      } else {
          nodes.forEach(n => {
              if (n.zoneType === 'tag') {
                  n.visible = true;
                  const angle = Math.random() * 2 * Math.PI; 
                  n.x = center.x + config.radii.tag * Math.cos(angle);
                  n.y = center.y + config.radii.tag * Math.sin(angle);
              }
          });
      }

      const simulation = d3.forceSimulation(nodes)
          .velocityDecay(0.5)
          .force("link", d3.forceLink(links).id(d => d.id).strength(0.01))
          .force("charge", d3.forceManyBody().strength(d => d.zoneType === 'tag' ? -200 : -25))
          .force("collide", d3.forceCollide().radius(d => (d.radius || 10) + 5).iterations(2))
          .force("r", d3.forceRadial(d => config.radii[d.zoneType] || 200, center.x, center.y).strength(0.8));

      let link = g.append("g").attr("class", "links").selectAll(".graph-link");
      let node = g.append("g").attr("class", "nodes").selectAll(".node");

      function restart() {
        const visibleNodes = nodes.filter(n => n.visible);
        const visibleLinks = links.filter(l => l.source.visible && l.target.visible);
        const openTagIds = new Set(nodes.filter(n => n.zoneType === 'tag' && !n.collapsed).map(n => n.id));
        
        const bridgeNodes = new Set();
        visibleNodes.forEach(n => {
            if (n.zoneType === 'tag') return;
            const myNeighbors = neighbors[n.id] || [];
            if (activeMode !== "DEFAULT") {
               if(myNeighbors.filter(nid => nodeMap.get(nid).visible).length >= 2) bridgeNodes.add(n.id);
            } else {
               if(myNeighbors.filter(nid => openTagIds.has(nid)).length >= 2) bridgeNodes.add(n.id);
            }
        });

        link = link.data(visibleLinks, d => d.source.id + "-" + d.target.id);
        link.exit().remove();
        link = link.enter().append("line").attr("class", "graph-link").merge(link);

        node = node.data(visibleNodes, d => d.id);
        node.exit().remove();
        const nodeEnter = node.enter().append("g").attr("class", "node")
            .call(d3.drag().on("start", dragstarted).on("drag", dragged).on("end", dragended));
        nodeEnter.append("circle");
        nodeEnter.append("text").attr("class", "node-text").attr("dy", d => (d.radius || 6) + 12).attr("text-anchor", "middle").text(d => d.label);
        
        nodeEnter.on("click", handleNodeClick).on("mouseover", showTooltip).on("mouseout", hideTooltip);
        node = nodeEnter.merge(node);

        node.attr("class", d => {
          let cls = "node";
          if(d.isCurrent) cls += " node-current";
          else if(bridgeNodes.has(d.id)) cls += " node-bridge";
          return cls;
        });

        node.select("circle")
            .attr("class", d => `node-circle node-${d.zoneType}`)
            .attr("r", d => {
                const baseR = d.radius || 6;
                if (d.isCurrent) return baseR * 2.5;
                if (bridgeNodes.has(d.id)) return baseR * 1.5;
                return baseR;
            })
            .attr("fill", d => {
                if (d.zoneType === 'tag') {
                    return d.collapsed ? "var(--bg-body)" : (d.color || config.defaultColor);
                }
                return null;
            })
            .attr("stroke", d => (d.zoneType === 'tag') ? (d.color || config.defaultColor) : null)
            .attr("stroke-width", d => (d.zoneType === 'tag') ? 3 : null);
            
        node.select("text").style("font-size", d => d.zoneType === 'tag' ? "12px" : "10px");

        simulation.nodes(visibleNodes);
        simulation.force("link").links(visibleLinks);
        simulation.alpha(1).restart();
      }

      function handleNodeClick(event, d) {
        event.stopPropagation();
        if (d.zoneType !== 'tag') {
          if (d.url) window.location.href = d.url;
          return;
        }
        
        const myNeighbors = neighbors[d.id] || [];
        const childrenToToggle = nodes.filter(n => myNeighbors.includes(n.id) && n.zoneType !== 'tag');
        
        if (childrenToToggle.length > 0) {
          d.collapsed = !d.collapsed;
          childrenToToggle.forEach(child => {
            if (!d.collapsed) { 
                child.visible = true; child.x = d.x; child.y = d.y; 
            } else if (activeMode === "DEFAULT") {
               const activeTags = nodes.filter(n => n.zoneType === 'tag' && !n.collapsed && n.id !== d.id);
               const isShared = activeTags.some(tag => (neighbors[tag.id]||[]).includes(child.id));
               if (!isShared) child.visible = false;
            }
          });
          restart();
        }
      }

      const tooltip = d3.select(container.querySelector(".graph-tooltip"));
      function showTooltip(e, d) {
        d3.select(this).select("circle").attr("stroke", "#333").style("stroke-width", "3px");
        link.style("stroke-opacity", l => (l.source.id === d.id || l.target.id === d.id) ? 1 : 0.05)
            .style("stroke", l => (l.source.id === d.id || l.target.id === d.id) ? "var(--main-color)" : null);
        tooltip.transition().duration(200).style("opacity", 1);
        
        let typeLabel = d.type;
        if(d.zoneType === 'tag') typeLabel = 'Thema';
        
        tooltip.html(`
            <div style="display:flex; align-items:center; gap:8px;">
                ${d.icon ? `<i class="fa-solid ${d.icon}" style="color:${d.color || config.defaultColor}"></i>` : ''}
                <b>${d.label}</b>
            </div>
            <small style="text-transform:capitalize">${typeLabel}</small>
        `)
        .style("left", (e.pageX+15)+"px").style("top", (e.pageY-28)+"px");
      }

      function hideTooltip(e, d) { 
         tooltip.transition().duration(200).style("opacity",0); 
         // FIX: Re-applying the color logic from restart() instead of calling missing getTagColor
         d3.select(this).select("circle")
           .attr("stroke", n => n.zoneType === 'tag' ? (n.color || config.defaultColor) : null)
           .style("stroke-width", n => n.zoneType === 'tag' ? "3px" : null);
         link.style("stroke-opacity", 0.3).style("stroke", null);
      }
      
      function zoomToFit() {
          const visibleNodes = nodes.filter(n => n.visible);
          if (visibleNodes.length === 0) {
             svg.transition().duration(750).call(zoom.transform, d3.zoomIdentity.translate(width/2, height/2).scale(0.8));
             return;
          }
          const box = { minX: d3.min(visibleNodes, d => d.x), maxX: d3.max(visibleNodes, d => d.x), minY: d3.min(visibleNodes, d => d.y), maxY: d3.max(visibleNodes, d => d.y) };
          const gw = box.maxX - box.minX + 80; const gh = box.maxY - box.minY + 80;
          if(isNaN(gw) || gw <= 80 || isNaN(gh) || gh <= 80) return;
          const scale = Math.min(1.5, 0.9 / Math.max(gw / width, gh / height));
          svg.transition().duration(750).call(zoom.transform, d3.zoomIdentity.translate(width/2, height/2).scale(scale).translate(-(box.minX+box.maxX)/2, -(box.minY+box.maxY)/2));
      }
      
      window.addEventListener('resize', () => {
        width = graphDiv.clientWidth; height = graphDiv.clientHeight;
        center = { x: width / 2, y: height / 2 };
        svg.attr("viewBox", [0, 0, width, height]);
        if(activeMode==="FOCUS" && focusId && nodeMap.has(focusId)) {
            const t = nodeMap.get(focusId); t.fx = center.x; t.fy = center.y;
        }
        simulation.force("r").x(center.x).y(center.y);
        simulation.alpha(0.3).restart();
      });

      const toggleBtn = container.querySelector('.toggle-btn');
      if(toggleBtn) {
          toggleBtn.addEventListener('click', function() {
            let allExpanded = (this.innerText === "Alles inklappen");
            allExpanded = !allExpanded;
            nodes.forEach(n => {
                 if(n.zoneType === 'tag') {
                     n.collapsed = !allExpanded;
                     if(allExpanded) {
                         (neighbors[n.id]||[]).forEach(x => { if(nodeMap.get(x)) nodeMap.get(x).visible = true; });
                     }
                 } else {
                     n.visible = allExpanded || n.zoneType === 'tag' || (focusId && (n.id === focusId || (neighbors[focusId]||[]).includes(n.id)));
                 }
            });
            this.innerText = allExpanded ? "Alles inklappen" : "Alles uitklappen";
            restart();
            setTimeout(zoomToFit, 1000);
        });
      }

      function dragstarted(e, d) { if(!e.active) simulation.alphaTarget(0.3).restart(); d.fx=d.x; d.fy=d.y; }
      function dragged(e, d) { d.fx=e.x; d.fy=e.y; }
      function dragended(e, d) { if(!e.active) simulation.alphaTarget(0); d.fx=null; d.fy=null; }
      
      simulation.on("tick", () => {
        link.attr("x1", d => d.source.x).attr("y1", d => d.source.y).attr("x2", d => d.target.x).attr("y2", d => d.target.y);
        node.attr("transform", d => `translate(${d.x},${d.y})`);
      });

      restart();
      setTimeout(() => {
          if(activeMode==="FOCUS" && focusId && nodeMap.has(focusId)) {
              const t = nodeMap.get(focusId); t.fx = null; t.fy = null;
          }
          zoomToFit();
      }, 1500);
    }).catch(err => { console.error(err); });
  });
}