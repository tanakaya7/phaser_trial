set :rails_env, "staging"
set :deploy_to, "/home/shin2018/staging"
set :branch, "master"

server "web5", user: "shin2018", roles: %w{web app db}
# server "web6", user: "shin2018", roles: %w{web app}
