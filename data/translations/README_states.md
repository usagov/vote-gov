# Explaining the `states.toml` files

The current layout of translated state names, as provided in 
`english/states.toml` and `spanish/states.toml`, is potentially confusing.
So here's a brief explanation. (However, if you want to refactor things to
be clearer, go right ahead.)

At present, the per-state filenames are created to be the name of the state
in the language currently being outputted. So, when English pages are being
output, the folder for Tennessee is created as `register/tennessee/`.
In Spanish, it's `registrar/tenesi/`.

When the pages for each language are being generated, the language-switcher
button in the top right of the page should link to the page for that state,
but in the other language. This is why the `states.toml` files contain
`file` attributes with the filenames for the other language - so that those
links can be created.
