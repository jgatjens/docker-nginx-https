## DOCKET HTTPS

## MAC setup

Create the certificates.

```bash
openssl req -x509 -out localhost.crt -keyout localhost.key \
  -newkey rsa:2048 -nodes -sha256 \
  -subj '/CN=localhost' -extensions EXT -config <( \
   printf "[dn]\nCN=localhost\n[req]\ndistinguished_name = dn\n[EXT]\nsubjectAltName=DNS:localhost\nkeyUsage=digitalSignature\nextendedKeyUsage=serverAuth")
```

Double click to install localhost.crt in your list of locally trusted roots.

```bash
mv -f locahost.crt ./nginx/cert/locahost.crt
mv -f locahost.key ./nginx/cert/locahost.key
```

Finally just run docker

```bash
docker compose up -d
```
