const extrasUrl = (url) => {
  const urlSplit = url.split('/');
  const path = urlSplit.splice(3).join('/');
  const host = urlSplit.splice(0, 3).join('/');
  return {
    path,
    host
  }
}

export default extrasUrl;