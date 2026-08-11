function createdcard(title, Cname, views, months, duration, thumbnail) {
    let viewStr;
    if (views >= 1000 && views < 1000000) {
        viewStr = views / 1000 + "K";
    }
    else if (views >= 1000000) {
        viewStr = views / 1000000 + "M"
    }
    else {
        viewStr = views;
    }
    let newCard = document.createElement("div");
    newCard.className = "container";


    newCard.innerHTML = `
        <div class="left">
            <div class="img">
                <img src="${thumbnail}" alt="thumbnail">
                <span class="duration">${duration}</span>
            </div>
        </div>
        <div class="right">
            <div class="title">
                <h3>${title}</h3>
            </div>
            <div class="video-data">
                <span class="channel-name">${Cname}</span>
                <span class="img"><svg xmlns="http://www.w3.org/2000/svg" height="2" viewBox="0 0 24 24" width="2" style="pointer-events: none; display: inherit; width: 20px; height: 10px;"><path d="M5 4.623v14.755a1.5 1.5 0 002.261 1.294l12.766-7.51L22 12.002l-1.973-1.162L7.26 3.33A1.5 1.5 0 005 4.623Zm2 13.88V5.497L18.056 12 7 18.503Z"></path></svg></span>
                <span class="views">${viewStr} views</span>
                <span class="months">${months} ago</span>
            </div>
        </div>
    `;
    document.body.append(newCard);
}

createdcard("JavaScript Variables | Tutorial #2 Sigma Web Dev", "CodeWithHarry", 1200000, "1 Year", "15:45", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg");

createdcard("Loops in JS | Tutorial #3 Sigma Web dev", "CodeWithHarry", 850, "5 Months", "22:10", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg");

createdcard("if else statment turorila #67", "CodeWithHarry", 2000000, "8 Months", "32:11", "https://i.ytimg.com/vi/ovKVqo-L2EM/hq720.jpg?sqp=-oaymwErCNAFEJQDSFryq4qpAx0IARUAAIhCGAHYAQHiAQoIGBACGAY4AUABuALzGA==&rs=AOn4CLBEkOwtRqDACuaThQuJ9qFVFTbQtA")