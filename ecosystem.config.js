module.exports = {
  apps : [{
    script: 'npm start'
  }],

  deploy : {
    production : {
      user : 'sufian',
      host : 'localhost',
      ref  : 'origin/main',
      repo : 'GIT_REPOSITORY',
      path : '/home/sufian',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
