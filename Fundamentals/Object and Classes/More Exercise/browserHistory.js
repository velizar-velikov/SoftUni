function browserHistory(browser, commands) {
    for (let command of commands) {
        let [action, site] = command.split(' ');
        if (action === 'Open') {
            browser['Open Tabs'].push(site);
            browser['Browser Logs'].push(command);
        } else if (action === 'Close') {
            let index = browser['Open Tabs'].indexOf(site);
            if (index === -1) continue;
            browser['Open Tabs'].splice(index, 1);
            browser['Recently Closed'].push(site);
            browser['Browser Logs'].push(command);
        } else if (command === 'Clear History and Cache') {
            for (let property in browser) {
                browser[property].length = 0;
            }
        }
    }
    console.log(`${browser['Browser Name']}`);
    console.log(`Open Tabs: ${browser['Open Tabs'].join(', ')}`);
    console.log(`Recently Closed: ${browser['Recently Closed'].join(', ')}`);
    console.log(`Browser Logs: ${browser['Browser Logs'].join(', ')}`);
}

browserHistory({
    "Browser Name": "Google Chrome", "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
    "Recently Closed": ["Yahoo", "Gmail"],
    "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]
},
    ["Close Facebook", "Open StackOverFlow", "Open Google"])


// browserHistory({"Browser Name":"Mozilla Firefox",
// "Open Tabs":["YouTube"],
// "Recently Closed":["Gmail", "Dropbox"],
// "Browser Logs":["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]},
// ["Open Wikipedia", "Clear History and Cache", "Open Twitter"])
