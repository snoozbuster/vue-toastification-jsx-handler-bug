# vue-toastification-jsx-handler-bug

Reproduces an issue with JSX toast content in vue-toastification 1.7.14. Event handlers do not work if JSX is passed directly as the toast content. However, if the JSX is wrapped in a component containing a render function, then the event handlers work fine.

## Run the sample

```
npm run serve
```

There are two buttons. One produces a toast with a working button, the other does not. The expectation is that both would work equivalently.
