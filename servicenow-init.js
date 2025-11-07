// ServiceNow initialization
async function initializeServiceNow() {
  try {
    const { init, getEmbeddables } = await import('https://sccitsmsit.service-now.com/uxasset/externals/sn_embeddable_core/index.jsdbx');
    window.ServiceNowEmbeddables = { init, getEmbeddables };
    console.log('ServiceNow module loaded successfully');
  } catch (error) {
    console.error('Failed to load ServiceNow module:', error);
  }
}