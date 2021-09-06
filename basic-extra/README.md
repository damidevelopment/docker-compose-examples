# Extra hosts for internal http requests

When you need to make internal http requests between services, you need to define `extra_hosts` variable and declare all domains against IP. Downside of this is, that you must define IP pool for network, becouse `extra_hosts` accepts only domain:IP pairs.
