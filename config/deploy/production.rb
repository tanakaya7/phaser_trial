set :rails_env, "production"
set :deploy_to, "/home/shin2018/production"
set :branch, "master"

server "web5", user: "shin2018", roles: %w{web app db}
# server "web6", user: "shin2018", roles: %w{web app}
