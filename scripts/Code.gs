function createSolutionDeck(data) {
  var TEMPLATE_ID = '1Cjy-08KnOYhD3yRm00Qv-1NKSnSxD8CGZOB-0yC0jYA';
  var template = DriveApp.getFileById(TEMPLATE_ID);
  var deckName = (data.TECH_NAME || 'Unknown') + ' - High Level Solution Guide';
  var copy = template.makeCopy(deckName);
  var pres = SlidesApp.openById(copy.getId());
  var slides = pres.getSlides();

  function slideContainsText(slide, text) {
    if (!text) return false;
    var shapes = slide.getShapes();
    for (var i = 0; i < shapes.length; i++) {
      try {
        if (shapes[i].getText && shapes[i].getText().asString().indexOf(text) !== -1) {
          return true;
        }
      } catch (e) {}
    }
    return false;
  }

  function findSlideByAnyTexts(texts) {
    for (var s = 0; s < slides.length; s++) {
      for (var t = 0; t < texts.length; t++) {
        if (slideContainsText(slides[s], texts[t])) {
          return slides[s];
        }
      }
    }
    return null;
  }

  function setSpeakerNotes(slide, noteText) {
    if (!slide || !noteText) return;
    var notesShape = slide.getNotesPage().getSpeakerNotesShape();
    if (!notesShape) return;

    var existing = '';
    try {
      existing = notesShape.getText().asString() || '';
    } catch (e) {}

    var trimmedExisting = existing.trim();
    var trimmedNew = noteText.trim();
    var finalText = trimmedExisting ? (trimmedExisting + '\n\n' + trimmedNew) : trimmedNew;

    notesShape.getText().setText(finalText);
  }

  // Token replacement
  for (var key in data) {
    if (key.match(/_URL$/)) continue; // Skip URL fields during token replacement
    var token = '{{' + key + '}}';
    var value = data[key] || '';
    slides.forEach(function(slide) { slide.replaceAllText(token, value); });
  }

  // Add source URLs to slide notes for the metrics slide
  var notesSlide18 = [];

  function addMetricSource(i) {
    var label = data['METRIC_' + i + '_LABEL'] || ('Metric ' + i);
    var title = data['METRIC_' + i + '_SOURCE_TITLE'] || '';
    var url = data['METRIC_' + i + '_SOURCE_URL'] || data['METRIC_' + i + '_URL'] || '';

    if (url) {
      var line = label + ': ';
      if (title) line += title + ' — ';
      line += url;
      notesSlide18.push(line);
    }
  }

  addMetricSource(1);
  addMetricSource(2);
  addMetricSource(3);
  if (notesSlide18.length > 0) {
    var metricsSlide = findSlideByAnyTexts([
      data.METRIC_1_LABEL,
      data.METRIC_2_LABEL,
      data.METRIC_3_LABEL,
      'By the Numbers'
    ]);
    setSpeakerNotes(metricsSlide, 'Source URLs:\n' + notesSlide18.join('\n'));
  }

  // Add source URL to the customer story / proof point slide notes
  if (data.CUSTOMER_STORY_URL) {
    var storySlide = findSlideByAnyTexts([
      data.CUSTOMER_STORY,
      data.CUSTOMER_STORY_DETAIL,
      'Customer Story',
      'Proof Point'
    ]);
    setSpeakerNotes(storySlide, 'Source URL:\n' + data.CUSTOMER_STORY_URL);
  }

  pres.saveAndClose();
  var url = 'https://docs.google.com/presentation/d/' + copy.getId() + '/edit';
  Logger.log('Deck created: ' + url);
  return url;
}

function createDeckFromData() {
  var data = {
    TECH_NAME: 'Elastic SIEM',
    PERSONA: 'Security operations teams at organizations already using CrowdStrike.',
    SITUATION: 'SOC teams have endpoint visibility through CrowdStrike but lack correlated coverage across network, cloud, and identity data.',
    SCENARIO: 'Analysts get CrowdStrike endpoint alerts but pivot between multiple tools to correlate network, cloud, and identity activity during investigations.',
    STORY_NAME: 'Priya',
    STORY_ROLE: 'SOC analyst at a mid-size enterprise running CrowdStrike.',
    STORY: 'Priya gets a CrowdStrike alert about suspicious process execution. She checks the endpoint in CrowdStrike, then switches to firewall logs in another tool, then opens cloud audit logs somewhere else. Thirty minutes pass before she sees the full picture. With Elastic SIEM ingesting CrowdStrike alongside all other telemetry, Priya sees the complete attack chain in one timeline.',
    ELEVATOR_1: 'Is a SIEM that unifies all security data including CrowdStrike telemetry.',
    ELEVATOR_2: 'Lets SOC teams investigate threats across endpoints, network, and cloud together.',
    ELEVATOR_3: 'Is like a control room with every security camera feed.',
    MENTAL_MODEL_TITLE: 'Like a security control room with every camera feed.',
    MENTAL_MODEL_DESCRIPTION: 'Shows all security signals together instead of one at a time.',
    MENTAL_MODEL_IMAGE_PROMPT: 'A security control room with a wall of monitors showing different camera feeds.',
    POSITIONING_BEST: 'CrowdStrike shops needing correlated visibility beyond endpoint telemetry.',
    POSITIONING_NOT_FIT: 'Teams only needing endpoint detection without broader SIEM requirements.',
    POSITIONING_START: 'Analysts saying they pivot between tools to complete investigations.',
    POSITIONING_LENS: 'Evaluate with data source breadth, investigation workflow, and SIEM maturity.',
    DIFFERENT_1: 'Ingests CrowdStrike data alongside network, cloud, and identity sources natively.',
    DIFFERENT_2: 'Over 400 integrations means analysts investigate without leaving one platform.',
    CUSTOMER_1: 'Lets teams correlate endpoint alerts to full attack chains faster.',
    CUSTOMER_2: 'Reduces triage time by 73% by unifying security data in one platform.',
    CUSTOMER_3: 'Improves detection coverage beyond what endpoint data alone provides.',
    CUSTOMER_LENS: 'Evaluate with data source count, investigation time, and detection gaps.',
    AE_1: 'Opens SIEM conversations in accounts already invested in CrowdStrike.',
    AE_2: 'Expands Elastic footprint alongside existing endpoint investments.',
    AE_3: 'Positions Elastic as the analytics layer CrowdStrike does not replace.',
    AE_LENS: 'Think about CrowdStrike shops, multi-tool SOCs, and SIEM-frustrated accounts.',
    SELL_PURSUE: 'SOC teams correlating CrowdStrike alerts with other sources manually.',
    SELL_PAUSE: 'Teams fully committed to CrowdStrike LogScale for all SIEM needs.',
    SELL_OPEN: '"How do analysts investigate alerts that involve more than endpoints?"',
    SELL_LENS: 'Qualify in on investigation friction, data silos, and SIEM evaluation.',
    METRIC_1_NUM: '50%',
    METRIC_1_LABEL: 'More Efficient SOC',
    METRIC_1_DESC: 'Proficio increased SOC productivity by half with Elastic Security.',
    METRIC_1_URL: 'https://www.elastic.co/customers/proficio',
    METRIC_2_NUM: '73%',
    METRIC_2_LABEL: 'Faster Triage',
    METRIC_2_DESC: 'AHEAD cut triage time by 73% even as security events grew.',
    METRIC_2_URL: 'https://www.elastic.co/customers/ahead',
    METRIC_3_NUM: '400+',
    METRIC_3_LABEL: 'Integrations',
    METRIC_3_DESC: 'Ingests data from over 400 sources including CrowdStrike natively.',
    METRIC_3_URL: 'https://www.elastic.co/integrations',
    CUSTOMER_STORY: 'AHEAD handles 200 billion security events monthly with Elastic SIEM.',
    CUSTOMER_STORY_DETAIL: 'Maintains 6.9 minute response time with 92% automated resolution.',
    CUSTOMER_STORY_URL: 'https://www.elastic.co/customers/ahead',
    NOT_SELL_1: 'Do not position as a CrowdStrike replacement; lead with broader visibility.',
    NOT_SELL_2: 'Do not demo detection rules before confirming investigation pain.',
    NOT_SELL_3: 'Do not compare endpoint features; focus on SIEM and correlation value.',
    NOT_SELL_LENS: 'Qualify out on endpoint-only needs, low data diversity, and small SOCs.',
    LISTEN_1: '"We have CrowdStrike but still cannot see the full attack picture."',
    LISTEN_2: '"Investigations require jumping between five different consoles."',
    LISTEN_3: '"Our SIEM cannot keep up with the volume or the cost."',
    SAY_1: '"Elastic SIEM ingests CrowdStrike data alongside everything else in one platform."',
    SAY_2: '"AHEAD cut triage time 73% while handling 200 billion events a month."',
    ASK_1: '"How do your analysts piece together the full picture beyond endpoint alerts?"',
    NEXT_STEP: 'Map current investigation workflow and show unified analysis in Elastic.'
  };
  return createSolutionDeck(data);
}