lock "~> 3.11.0"

set :application, "phaser_trial"
set :repo_url, "git@github.com:kuroda/phaser_trial.git"

set :linked_files, fetch(:linked_files, []).push(
  "config/master.key"
)
set :linked_dirs, fetch(:linked_dirs, []).push(
  "log",
  "node_modules",
  "public/packs",
  "public/system",
  "storage",
  "tmp/pids",
  "tmp/cache",
  "tmp/sockets"
)

set :default_env, ->{
  {
    path: "/opt/rubies/ruby-2.5.1/bin:$PATH",
    node_env: fetch(:rails_env)
  }
}

set :keep_releases, 5

namespace :deploy do
  task :compile_assets do
    on roles(:web) do
      execute "cd #{release_path}; RAILS_ENV=production bundle exec rake webpacker:compile"
    end
  end

  after  :finishing, :compile_assets
end
