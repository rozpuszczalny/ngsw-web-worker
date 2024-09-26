addEventListener('message', ({data}) => {
  if (data === 'ping') {
    postMessage('pong version A');
  }
});
