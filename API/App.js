const express = require("express");
const axios = require("axios");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

async function getToken() {
  const params = new URLSearchParams();
  params.append("grant_type", "password");
  params.append("username", config.pbiUsername);
  params.append("password", config.pbiPassword);
  params.append("client_id", config.clientId);
  params.append("resource", config.scopeBase);
  params.append("client_secret", config.clientSecret);

  try {
    const response = await axios.post(config.authorityUrl, params, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    return response.data.access_token;
  } catch (error) {
    console.error(
      "Error fetching token:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
}

app.post("/api/token", async (req, res) => {
  try {
    const token = await getToken();
    res.json({ accessToken: token });
  } catch (error) {
    res.status(500).json({ error: "Error fetching token" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
