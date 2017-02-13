## Acceptance Testing Demo
Primary tool is `codeceptjs`


requirements:
*  vagrant
*  virtualbox
*  ansible
*  vagrant-hostsupdater `vagrant plugin install vagrant-hostsupdater` this will add an antry to your /etc/hosts file.  It will ask for your sudo password.  If you don't feel comfortable with that you can circumvent the process by running `echo "acceptance.loc localhost" >> /etc/hosts`
*  clone this repo inside your top level project
*  will automatically mount your `./src` folder to internal `/mnt` so make sure you have a `/src` folder
*  uses variables for development at `../deploy/vagrant/developmentconfig.yaml`  with the following format:
```yaml
configs:
  public_ip: '10.11.0.12'
  name.loc: 'name.loc'
```


installation:
*  [development] `vagrant up`
*  [development] `ansible-playbook -i deploy/ansible/inventory/development deploy/ansible/inventory/provision.yml`
*  [production] `ansible-playbook -i deploy/ansible/inventory/production deploy/ansible/inventory/provision.yml`

test:
*  [browse to acceptance.loc](http://acceptance.loc) or `ip.of.external.box`