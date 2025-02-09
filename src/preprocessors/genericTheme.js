
const discordVars = [
  '--header-primary',
  '--header-secondary',
  '--text-normal',
  '--text-muted',
  '--text-link',
  '--channels-default',
  '--interactive-normal',
  '--interactive-hover',
  '--interactive-active',
  '--interactive-muted',
  '--background-primary',
  '--background-secondary',
  '--background-secondary-alt',
  '--background-tertiary',
  '--background-accent',
  '--background-floating',
  '--background-mobile-primary',
  '--background-mobile-secondary',
  '--background-modifier-hover',
  '--background-modifier-active',
  '--background-modifier-selected',
  '--background-modifier-accent',
  '--background-mentioned',
  '--background-mentioned-hover',
  '--background-message-hover',
  '--background-help-warning',
  '--background-help-info',
  '--scrollbar-thin-thumb',
  '--scrollbar-thin-track',
  '--scrollbar-auto-thumb',
  '--scrollbar-auto-track',
  '--scrollbar-auto-scrollbar-color-thumb',
  '--scrollbar-auto-scrollbar-color-track',
  '--elevation-stroke',
  '--elevation-low',
  '--elevation-medium',
  '--elevation-high',
  '--logo-primary',
  '--focus-primary',
  '--radio-group-dot-foreground',
  '--guild-header-text-shadow',
  '--channeltextarea-background',
  '--activity-card-background',
  '--textbox-markdown-syntax',
  '--deprecated-card-bg',
  '--deprecated-card-editable-bg',
  '--deprecated-store-bg',
  '--deprecated-quickswitcher-input-background',
  '--deprecated-quickswitcher-input-placeholder',
  '--deprecated-text-input-bg',
  '--deprecated-text-input-border',
  '--deprecated-text-input-border-hover',
  '--deprecated-text-input-border-disabled',
  '--deprecated-text-input-prefix'    
];

export default (manifest, content, repo) => {
  let variables = content.match(/--([^*!\n}]*): ([^*!\n}]*);/g) || [];
  if (variables.length > 0) variables = variables.map((x) => {
    const spl = x.split(':');

    let name = spl[0].trim();
    let val = spl.slice(1).join(':').trim().slice(0, -1).replace(' !important', '');

    let type = 'text';

    if (val.match(/(#[0-9a-fA-F]{6}|([0-9]{1,3}, ?[0-9]{1,3}, ?[0-9]{1,3}))/)) {
      type = 'color';
    }

    return [name, val, type];
  });

  // Filter out Discord standard vars, and duplicate names
  if (variables.length > 0) variables = variables.filter((x, i, s) => !discordVars.includes(x[0]) && !x[1].includes('var(') && !x[0].includes('glasscord') && s.indexOf(s.find((y) => y[0] === x[0])) === i);

  const toShowSettings = repo[5] === true && variables.length > 0;

  console.log(variables, toShowSettings);

  return `// Generated by MS2Builder - genericTheme preprocessor / porter
  let style;
  
  export default {
    goosemodHandlers: {
      onImport: async () => {
        style = document.createElement("style");
        document.head.appendChild(style);
        style.appendChild(
          document.createTextNode(
            \`${content}\`
          )
        );
  
        if (${toShowSettings} || (goosemodScope.settings.gmSettings.get().allThemeSettings)) goosemodScope.settings.createItem('${manifest.name}', [
          '',
  
          ${variables.map((x) => (`{
            type: '${x[2] === 'color' ? 'text-and-color' : 'text-input'}',
            text: '${x[0].replace('--rs-', '--radial-status:-').substring(2).replace(/-/g, ' ').replace(/\w\S*/g, (_) => _[0].toUpperCase() + _.substring(1).toLowerCase()).replace('Rgb', 'RGB').replace('Afk', 'AFK').replace('Dnd', 'DND')}',
  
            oninput: (val) => {
              ${x[1][0] !== '#' ? `val = parseInt(val.substring(1, 3), 16).toString() + ', ' + parseInt(val.substring(3, 5), 16).toString() + ', ' + parseInt(val.substring(5, 7), 16).toString()` : ''}
  
              console.log(val);
  
              document.body.style.setProperty('${x[0]}', val);
            },
            initialValue: () => {
              let val = document.body.style.getPropertyValue(\`${x[0]}\`) || \`${x[1]}\`;
              ${x[2] === 'color' ? `if (val[0] !== '#') { val = '#' + val.split(', ').map((x) => parseInt(x).toString(16).padStart(2, '0')).join(''); }` : ''}
  
              console.log(val);
  
              return val;
            }
          }`)).join(', ')}
        ])
      },
    
      onRemove: async () => {
        style.remove();
  
        try {
          goosemodScope.settings.removeItem('${manifest.name}');
        } catch (e) { }
      },
  
      getSettings: async () => [${variables.map((x) => `['${x[0]}', document.body.style.getPropertyValue(\`${x[0]}\`)]`).join(', ')}],
      loadSettings: async (settings) => {
        settings.forEach((x) => {
          document.body.style.setProperty(x[0], x[1]);
        });
      }
    }
  };`;
};