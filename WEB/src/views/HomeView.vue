<template>
  <div class="container">
    <div class="header">Power BI Embedded Vue JS Component Demo</div>
    <div class="controls">
      <template v-if="isEmbedded">
        <label class="display-message">{{ displayMessage }}</label>
      </template>
      <template v-else>
        <label class="display-message position">{{ displayMessage }}</label>
        <button @click="embedReport" class="embed-report">Embed Report</button>
      </template>

      <PowerBIReportEmbed v-if="isEmbedded"
                          :embed-config="sampleReportConfig"
                          :css-class-name="reportClass"
                          @report-obj="setReportObj">
      </PowerBIReportEmbed>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import axios from 'axios';
import {PowerBIReportEmbed} from 'powerbi-client-vue-js';
import {models, Report} from 'powerbi-client';

const isEmbedded = ref(false);
const displayMessage = ref('The report is bootstrapped. Click Embed Report button to set the access token.');
const sampleReportConfig = ref({
  type: 'report',
  embedUrl: undefined,
  tokenType: models.TokenType.Embed,
  accessToken: undefined,
});
const reportClass = 'report-container';
let report = null;

const config = {
  reportId: '929c1568-fbd5-4454-ae1a-3fc87ce25334',
  embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=929c1568-fbd5-4454-ae1a-3fc87ce25334&groupId=7a95507a-fc94-49cb-9f25-a8c8210de361',
};

const fetchToken = async () => {
  try {
    const response = await axios.post('http://localhost:3000/api/token');
    return response.data.accessToken;
  } catch (error) {
    console.error('Error fetching token:', error.response ? error.response.data : error.message);
    return null;
  }
};

const embedReport = async () => {
  const token = await fetchToken();
  if (!token) {
    displayMessage.value = 'Failed to fetch token.';
    return;
  }

  sampleReportConfig.value = {
    ...sampleReportConfig.value,
    id: config.reportId,
    embedUrl: config.embedUrl,
    accessToken: token,
  };

  isEmbedded.value = true;
  displayMessage.value = 'Report is embedded.';
};

const setReportObj = (value) => {
  report = value;
};
</script>
