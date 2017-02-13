# encoding: utf-8
# -*- mode: ruby -*-
# vi: set ft=ruby :

require 'yaml'

current_dir    = File.dirname(File.expand_path(__FILE__))
configs        = YAML.load_file("#{current_dir}/deploy/vagrant/developmentconfig.yml")
vagrant_config = configs['configs']

Vagrant.configure(2) do |config|
  config.vm.box = "ubuntu/trusty64"
  config.vm.synced_folder 'src', '/mnt'
  config.vm.network "private_network", ip: vagrant_config['server_ip']
  config.vm.provider "virtualbox" do |v|
    v.memory = 2048
  end
    config.hostsupdater.aliases = [
    vagrant_config['name.loc']
  ]
end

