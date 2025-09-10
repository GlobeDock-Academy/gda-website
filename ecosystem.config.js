module.exports = {
  apps: [
    {
      name: "GDA-WEBSITE",
      cwd: "/var/www/gda-website",

      // Call Next directly (avoids extra npm wrapper)
      script: "node_modules/next/dist/bin/next",
      args: "start -p 4000",

      exec_mode: "cluster",
      instances: "max",           // or set a number, e.g. 4
      //watch: false,               // never watch in production
      max_memory_restart: "1G",

      env: {
        NODE_ENV: "production"
        // Add other envs here, e.g. DATABASE_URL, NEXT_PUBLIC_*
      },

      // Use absolute log paths and make sure directory exists
      out_file: "/var/www/gda-website/logs/out.log",
      error_file: "/var/www/gda-website/logs/error.log",
      log_date_format: "YYYY-MM-DD HH:mm:ss Z"
    }
  ]
};

