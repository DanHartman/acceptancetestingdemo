## Common Virtualbox Development
Repo for reducing the number of times I make a new
Vagrantfile.  The thought is to include this inside other repos.


requirements:
*  vagrant
*  virtualbox
*  ansible
*  vagrant-hostsupdater `vagrant plugin install vagrant-hostsupdater`

installation:
*  clone this repo inside your top level project
*  will automatically mount your `/src` folder to internal `/mnt` so make sure you have a `/src` folder
*  requires a `developmentconfig.yaml` file in the `../` directory.  Use the following format:
```yaml
configs:
  public_ip: '10.11.0.12'
  name.loc: 'name.loc'
```


