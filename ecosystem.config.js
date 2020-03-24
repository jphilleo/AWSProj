module.exports = {
  apps: [{
    name: 'aws-proj',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-34-222-129-142.us-west-2.compute.amazonaws.com',
      key: '~/.ssh/tutorial.pem',
      ref: 'origin/master',
      repo: 'https://github.com/jphilleo/AWSProj.git',
      path: '/home/ubuntu/AWSProj',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
