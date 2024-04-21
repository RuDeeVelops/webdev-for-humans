# 🚀 Javascript Insights for Human Beings

## 🧩 Nothing makes sense in JS.. untill it does!

An ever-growing, non-comprehensive, terribly informal and opinionated list of insights that I struggled with on my journey through the wilds of Javascript. 🌲🌳.

🕵️‍♀️ If you spot any mistake feel free to submit a PR. There's probably a bunch!

work on the action and js to pull dynamically list of js everytime a file is saved or created

<!--
name: Update README

on:
    schedule:
        - cron: '0 * * * *'  # Runs every hour

jobs:
    update-readme:
        runs-on: ubuntu-latest
        steps:
            - uses: actions/checkout@v2
            - name: Run update script
                run: node .github/scripts/update-readme.js
            - name: Commit and push if changed
                run: |
                    git diff
                    git config --global user.email "action@github.com"
                    git config --global user.name "GitHub Action"
                    git commit -am "Update README" || exit 0
                    git push




                    const fs = require('fs');
                    const fetch = require('node-fetch');

                    fetch('https://api.github.com/repos/{owner}/{repo}/contents/')
                        .then(response => response.json())
                        .then(data => {
                            let list = '## Repository Contents\n\n';
                            data.forEach(item => {
                                list += `- [${item.name}](${item.html_url})\n`;
                            });
                            let readme = fs.readFileSync('README.md', 'utf8');
                            readme = readme.replace(/## Repository Contents\n\n([\s\S]*)/, list);
                            fs.writeFileSync('README.md', readme);
                        })
                        .catch(error => console.error(error)); -->
