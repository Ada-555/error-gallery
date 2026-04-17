const o=[{id:"stripe-001",website:"Stripe",websiteUrl:"https://stripe.com",submittedFrom:"https://stripe.com/404",screenshot:"screenshots/stripe-404.jpg",tags:["saas","minimal","illustration"],submitter:"kay_c555",dateAdded:"2026-04-17",upvotes:142,iframeUrl:null},{id:"github-002",website:"GitHub",websiteUrl:"https://github.com",submittedFrom:"https://github.com/404",screenshot:"screenshots/github-404.jpg",tags:["developer","illustration","space"],submitter:"kay_c555",dateAdded:"2026-04-17",upvotes:98,iframeUrl:null},{id:"airbnb-003",website:"Airbnb",websiteUrl:"https://airbnb.com",submittedFrom:"https://airbnb.com/404",screenshot:"screenshots/airbnb-404.jpg",tags:["travel","illustration","warm"],submitter:"kay_c555",dateAdded:"2026-04-17",upvotes:87,iframeUrl:null},{id:"slack-004",website:"Slack",websiteUrl:"https://slack.com",submittedFrom:"https://slack.com/404",screenshot:"screenshots/slack-404.jpg",tags:["saas","illustration","cute"],submitter:"kay_c555",dateAdded:"2026-04-17",upvotes:76,iframeUrl:null},{id:"mailchimp-005",website:"Mailchimp",websiteUrl:"https://mailchimp.com",submittedFrom:"https://mailchimp.com/404",screenshot:"screenshots/mailchimp-404.jpg",tags:["email","illustration","fun"],submitter:"kay_c555",dateAdded:"2026-04-17",upvotes:65,iframeUrl:null},{id:"notion-006",website:"Notion",websiteUrl:"https://notion.so",submittedFrom:"https://notion.so/404",screenshot:"screenshots/notion-404.jpg",tags:["productivity","minimal","space"],submitter:"kay_c555",dateAdded:"2026-04-17",upvotes:112,iframeUrl:null},{id:"figma-007",website:"Figma",websiteUrl:"https://figma.com",submittedFrom:"https://figma.com/404",screenshot:"screenshots/figma-404.jpg",tags:["design","minimal","glitch"],submitter:"kay_c555",dateAdded:"2026-04-17",upvotes:89,iframeUrl:null},{id:"linear-008",website:"Linear",websiteUrl:"https://linear.app",submittedFrom:"https://linear.app/404",screenshot:"screenshots/linear-404.jpg",tags:["saas","minimal","glitch"],submitter:"kay_c555",dateAdded:"2026-04-17",upvotes:94,iframeUrl:null},{id:"kickstarter-009",website:"Kickstarter",websiteUrl:"https://kickstarter.com",submittedFrom:"https://kickstarter.com/404",screenshot:"screenshots/kickstarter-404.jpg",tags:["crowdfunding","illustration","paper"],submitter:"kay_c555",dateAdded:"2026-04-17",upvotes:58,iframeUrl:null},{id:"discord-010",website:"Discord",websiteUrl:"https://discord.com",submittedFrom:"https://discord.com/404",screenshot:"screenshots/discord-404.jpg",tags:["gaming","illustration","sound"],submitter:"kay_c555",dateAdded:"2026-04-17",upvotes:71,iframeUrl:null},{id:"lego-011",website:"LEGO",websiteUrl:"https://lego.com",submittedFrom:"https://lego.com/404",screenshot:"screenshots/lego-404.jpg",tags:["brand","illustration","playful"],submitter:"kay_c555",dateAdded:"2026-04-17",upvotes:83,iframeUrl:null},{id:"pixar-012",website:"Pixar",websiteUrl:"https://pixar.com",submittedFrom:"https://pixar.com/404",screenshot:"screenshots/pixar-404.jpg",tags:["entertainment","illustration","nostalgic"],submitter:"kay_c555",dateAdded:"2026-04-17",upvotes:101,iframeUrl:null}];function c(t){return`
      <a href="/error-gallery/exhibit/${t.id}" class="gallery-card">
        <div class="card-image">
          <img src="${t.screenshot}" alt="${t.website} 404 page" loading="lazy" />
          <div class="card-overlay">
            <span class="view-btn">View Exhibit</span>
          </div>
        </div>
        <div class="card-meta">
          <div class="card-header">
            <h3 class="card-title">${t.website}</h3>
            <span class="card-upvotes">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 19V5M5 12l7-7 7 7"/>
              </svg>
              ${t.upvotes}
            </span>
          </div>
          <div class="card-tags">
            ${t.tags.slice(0,3).map(s=>`<span class="tag">${s}</span>`).join("")}
          </div>
          <div class="card-footer">
            <span class="card-submitter">by ${t.submitter}</span>
            <span class="card-date">${t.dateAdded}</span>
          </div>
        </div>
      </a>
    `}function d(){const t=new URLSearchParams(window.location.search),s=t.get("tag")||"",l=t.get("year")||"";let e=o;s&&(e=e.filter(a=>a.tags.includes(s))),l&&(e=e.filter(a=>a.dateAdded.startsWith(l)));const r=document.querySelector(".gallery-grid"),i=document.querySelector(".empty-state");r&&(e.length===0?(r.innerHTML="",i&&(i.style.display="block")):(r.innerHTML=e.map(c).join(""),i&&(i.style.display="none")))}window.addEventListener("filter-changed",d);d();
