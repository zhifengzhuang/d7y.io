---
id: dfdaemon
title: dfdaemon
---

Installing Dragonfly Dfdaemon Server

This topic explains how to install the Dragonfly dfdaemon server.

## Prerequisites

When deploying with physical machines, the following conditions must be met.

| Required Software | Version Limit |
| ----------------- | ------------- |
| Git               | 1.9.1+        |
| Golang            | 1.16.x        |

## Procedure - When Deploying with Physical Machines

### Get dfget executable file

1. Download a binary package of the dfget. You can download one of
   the latest builds for Dragonfly on the
   [github releases page](https://github.com/dragonflyoss/Dragonfly2/releases).

   ```sh
   version=2.0.2

   wget -o Dragonfly2_linux_amd64.tar.gz \
      https://github.com/dragonflyoss/Dragonfly2/releases/download/v${version}/Dragonfly2_${version}_linux_amd64.tar.gz
   ```

2. Unzip the package.

   ```bash
   # Replace `xxx` with the installation directory.
   tar -zxf Dragonfly2_linux_amd64.tar.gz -C xxx
   ```

3. Move the `dfget` to your `PATH` environment variable to
   make sure you can directly use `dfget` command.

Or you can build your own dfget executable file.

1. Obtain the source code of Dragonfly.

   ```sh
   git clone https://github.com/dragonflyoss/Dragonfly2.git
   ```

2. Enter the project directory.

   ```sh
   cd Dragonfly2
   ```

3. Compile the source code.

   ```sh
   make build-dfget && make install-dfget
   ```

### Start dfdaemon

```sh
# download dfget configuration example
# Notice: check and modify some config e.g. scheduler.manager ...
wget -o /etc/dragonfly/dfget.yaml \
 https://raw.githubusercontent.com/dragonflyoss/Dragonfly2/main/docs/en/deployment/configuration/dfget.yaml

dfget daemon --options
```

After dfget is installed, run the following commands to
verify if **dfdaemon** is started,
and if Port `65000`, `65001` and `65002` is available.

```sh
telnet 127.0.0.1 65000
telnet 127.0.0.1 65001
telnet 127.0.0.1 65002
```
