module.exports = {
  apps : [{
    script: 'npm start'
  }],

  deploy : {
    production : {
      user : 'sufian',
      host : 'localhost',
      ref  : 'origin/main',
      repo : 'git@github.com:abusufian12/nextjs-blog.git',
      path : '/var/www/html/nextjstest/nextjs-test2',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      'ssh_options': 'ForwardAgent=yes'
    }
  }
};
