# Based on Soroban Preview 7
# https://soroban.stellar.org/docs/reference/releases

FROM ubuntu:20.04

RUN apt update
RUN apt install -y nano
RUN apt install -y curl
RUN apt install -y libc++-dev


RUN mkdir /workspace
WORKDIR /workspace
RUN mkdir -p /root/.nargo/bin && \
curl -o /root/.nargo/bin/nargo-x86_64-unknown-linux-gnu.tar.gz -L https://github.com/noir-lang/noir/releases/download/v0.22.0/nargo-x86_64-unknown-linux-gnu.tar.gz && \
tar -xvf /root/.nargo/bin/nargo-x86_64-unknown-linux-gnu.tar.gz -C /root/.nargo/bin/
ENV PATH="/root/.nargo/bin:${PATH}"
RUN apt update && apt install -y git

# installs NVM (Node Version Manager)
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
ENV NVM_DIR="/root/.nvm"
RUN [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
RUN [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  
RUN . "$NVM_DIR/nvm.sh" && \
    nvm install 20 && \
    nvm alias default 20 && \
    nvm use default

# Install npm
ENV DEBIAN_FRONTEND=noninteractive
RUN apt-get install -y npm

# Install Yarn
RUN curl -fsSL https://dl.yarnpkg.com/debian/pubkey.gpg | gpg --dearmor | tee /usr/share/keyrings/yarn-archive-keyring.gpg >/dev/null && \
    echo "deb [signed-by=/usr/share/keyrings/yarn-archive-keyring.gpg] https://dl.yarnpkg.com/debian stable main" | tee /etc/apt/sources.list.d/yarn.list && \
    apt-get install -y yarn


    # source ~/.bashrc

# ENV IS_USING_DOCKER=true





# RUN apt install -y build-essential

# RUN apt install -y jq
# RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash \
#     && . ~/.bashrc \
#     && nvm install 18.18.2 && nvm use 18.18.2

# ENV NODE_VERSION=18.18.2
# ENV PATH="/root/.nvm/versions/node/v${NODE_VERSION}/bin/:${PATH}"

# RUN apt update && apt install -y git

# # WORKDIR /
# RUN mkdir /workspace
# WORKDIR /workspace
# ENV IS_USING_DOCKER=true

# #Forcing to only use the rust version installed when building the image
# RUN rustc_version=$(rustc --version | cut -d' ' -f2) && \
#     rustup override set $rustc_version

# RUN corepack enable
# RUN touch .update
# ## THIS NEXT LINE SHOULD BE THE ONLY ONE TO CHANGE BETWEEN SOROBAN PREVIEWS
# RUN cargo install --locked --version 20.3.1 soroban-cli --features opt
# RUN rustup target add wasm32-unknown-unknown
