app.get('/check', async (req, res) => {
  var status = {
    status: "Running..."
  }
  res.json(status);
});