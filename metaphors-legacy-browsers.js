/****************** 
 * Metaphors *
 ******************/


// store info about the experiment session:
let expName = 'metaphors';  // from the Builder filename that created this script
let expInfo = {
    'participant': '',
    'group': ["exp", "con"],
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(welcomeRoutineBegin());
flowScheduler.add(welcomeRoutineEachFrame());
flowScheduler.add(welcomeRoutineEnd());
const practiceLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(practiceLoopBegin(practiceLoopScheduler));
flowScheduler.add(practiceLoopScheduler);
flowScheduler.add(practiceLoopEnd);





flowScheduler.add(startRoutineBegin());
flowScheduler.add(startRoutineEachFrame());
flowScheduler.add(startRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);





flowScheduler.add(endRoutineBegin());
flowScheduler.add(endRoutineEachFrame());
flowScheduler.add(endRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Bedankt voor het meedoen!', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Bedankt voor het meedoen!', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'resources/practiceStimuli.xlsx', 'path': 'resources/practiceStimuli.xlsx'},
    {'name': 'resources/idiomStimuli.xlsx', 'path': 'resources/idiomStimuli.xlsx'},
    {'name': 'resources/idiomStimuli.xlsx', 'path': 'resources/idiomStimuli.xlsx'},
    {'name': 'resources/practiceStimuli.xlsx', 'path': 'resources/practiceStimuli.xlsx'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.2.4';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  psychoJS.setRedirectUrls('https://kemaeri.github.io/metaphor-knowledge//debrief', '');


  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var welcomeClock;
var textWelcome;
var keyWelcome;
var fixClock;
var fixation;
var trialClock;
var trialText;
var questionClock;
var questionText;
var feedbackClock;
var fb;
var startClock;
var textStart;
var keyStart;
var pauseClock;
var breakN;
var breakOn;
var pauseText;
var pauseKey;
var endClock;
var textEnd;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "welcome"
  welcomeClock = new util.Clock();
  textWelcome = new visual.TextStim({
    win: psychoJS.window,
    name: 'textWelcome',
    text: 'Welkom!\n\nIn dit onderzoek ga je steeds een zin lezen en dan een vraag beantwoorden. Je ziet de hele zin niet in één keer. Er verschijnt steeds een nieuw stukje als je op de spatiebalk drukt.\n\nWe gaan eerst even oefenen.\n\nDruk op de spatiebalk om verder te gaan.',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0], draggable: false, height: 0.1,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  keyWelcome = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "fix"
  fixClock = new util.Clock();
  fixation = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixation',
    text: '+',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  trialText = new visual.TextStim({
    win: psychoJS.window,
    name: 'trialText',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "question"
  questionClock = new util.Clock();
  questionText = new visual.TextStim({
    win: psychoJS.window,
    name: 'questionText',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "feedback"
  feedbackClock = new util.Clock();
  fb = new visual.TextStim({
    win: psychoJS.window,
    name: 'fb',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "start"
  startClock = new util.Clock();
  textStart = new visual.TextStim({
    win: psychoJS.window,
    name: 'textStart',
    text: 'Goed gedaan!\n\nNu je weet hoe het werkt, gaan we echt beginnen.\n\nVeel succes!\n\nDruk op de spatiebalk om verder te gaan',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0], draggable: false, height: 0.1,  wrapWidth: 1.8, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  keyStart = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "pause"
  pauseClock = new util.Clock();
  // Run 'Begin Experiment' code from pauseCode
  function multiples(value, length) {
      return [...util.range(value, ((length * value) + 1), value)];
  }
  breakN = 0;
  breakOn = multiples(8, 4);
  
  pauseText = new visual.TextStim({
    win: psychoJS.window,
    name: 'pauseText',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  pauseKey = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "end"
  endClock = new util.Clock();
  textEnd = new visual.TextStim({
    win: psychoJS.window,
    name: 'textEnd',
    text: 'We zijn bij het einde van het experiment.\n\nBedankt voor het meedoen!\n\nDe data wordt nu opgeslagen. Nog even wachten...',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0], draggable: false, height: 0.1,  wrapWidth: 1.8, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var welcomeMaxDurationReached;
var _keyWelcome_allKeys;
var welcomeMaxDuration;
var welcomeComponents;
function welcomeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'welcome' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    welcomeClock.reset();
    routineTimer.reset();
    welcomeMaxDurationReached = false;
    // update component parameters for each repeat
    keyWelcome.keys = undefined;
    keyWelcome.rt = undefined;
    _keyWelcome_allKeys = [];
    psychoJS.experiment.addData('welcome.started', globalClock.getTime());
    welcomeMaxDuration = null
    // keep track of which components have finished
    welcomeComponents = [];
    welcomeComponents.push(textWelcome);
    welcomeComponents.push(keyWelcome);
    
    welcomeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function welcomeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'welcome' ---
    // get current time
    t = welcomeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textWelcome* updates
    if (t >= 0.0 && textWelcome.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textWelcome.tStart = t;  // (not accounting for frame time here)
      textWelcome.frameNStart = frameN;  // exact frame index
      
      textWelcome.setAutoDraw(true);
    }
    
    
    // *keyWelcome* updates
    if (t >= 0.0 && keyWelcome.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      keyWelcome.tStart = t;  // (not accounting for frame time here)
      keyWelcome.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { keyWelcome.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { keyWelcome.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { keyWelcome.clearEvents(); });
    }
    
    if (keyWelcome.status === PsychoJS.Status.STARTED) {
      let theseKeys = keyWelcome.getKeys({keyList: ['space'], waitRelease: false});
      _keyWelcome_allKeys = _keyWelcome_allKeys.concat(theseKeys);
      if (_keyWelcome_allKeys.length > 0) {
        keyWelcome.keys = _keyWelcome_allKeys[0].name;  // just the first key pressed
        keyWelcome.rt = _keyWelcome_allKeys[0].rt;
        keyWelcome.duration = _keyWelcome_allKeys[0].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    welcomeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function welcomeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'welcome' ---
    welcomeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('welcome.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(keyWelcome.corr, level);
    }
    psychoJS.experiment.addData('keyWelcome.keys', keyWelcome.keys);
    if (typeof keyWelcome.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('keyWelcome.rt', keyWelcome.rt);
        psychoJS.experiment.addData('keyWelcome.duration', keyWelcome.duration);
        routineTimer.reset();
        }
    
    keyWelcome.stop();
    // the Routine "welcome" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var practice;
function practiceLoopBegin(practiceLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    practice = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'resources/practiceStimuli.xlsx',
      seed: undefined, name: 'practice'
    });
    psychoJS.experiment.addLoop(practice); // add the loop to the experiment
    currentLoop = practice;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    practice.forEach(function() {
      snapshot = practice.getSnapshot();
    
      practiceLoopScheduler.add(importConditions(snapshot));
      practiceLoopScheduler.add(fixRoutineBegin(snapshot));
      practiceLoopScheduler.add(fixRoutineEachFrame());
      practiceLoopScheduler.add(fixRoutineEnd(snapshot));
      practiceLoopScheduler.add(trialRoutineBegin(snapshot));
      practiceLoopScheduler.add(trialRoutineEachFrame());
      practiceLoopScheduler.add(trialRoutineEnd(snapshot));
      practiceLoopScheduler.add(questionRoutineBegin(snapshot));
      practiceLoopScheduler.add(questionRoutineEachFrame());
      practiceLoopScheduler.add(questionRoutineEnd(snapshot));
      practiceLoopScheduler.add(feedbackRoutineBegin(snapshot));
      practiceLoopScheduler.add(feedbackRoutineEachFrame());
      practiceLoopScheduler.add(feedbackRoutineEnd(snapshot));
      practiceLoopScheduler.add(practiceLoopEndIteration(practiceLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function practiceLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(practice);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function practiceLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'resources/idiomStimuli.xlsx',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials.forEach(function() {
      snapshot = trials.getSnapshot();
    
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(fixRoutineBegin(snapshot));
      trialsLoopScheduler.add(fixRoutineEachFrame());
      trialsLoopScheduler.add(fixRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialRoutineBegin(snapshot));
      trialsLoopScheduler.add(trialRoutineEachFrame());
      trialsLoopScheduler.add(trialRoutineEnd(snapshot));
      trialsLoopScheduler.add(questionRoutineBegin(snapshot));
      trialsLoopScheduler.add(questionRoutineEachFrame());
      trialsLoopScheduler.add(questionRoutineEnd(snapshot));
      trialsLoopScheduler.add(pauseRoutineBegin(snapshot));
      trialsLoopScheduler.add(pauseRoutineEachFrame());
      trialsLoopScheduler.add(pauseRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var fixMaxDurationReached;
var fixMaxDuration;
var fixComponents;
function fixRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'fix' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    fixClock.reset(routineTimer.getTime());
    routineTimer.add(1.000000);
    fixMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('fix.started', globalClock.getTime());
    fixMaxDuration = null
    // keep track of which components have finished
    fixComponents = [];
    fixComponents.push(fixation);
    
    fixComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function fixRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'fix' ---
    // get current time
    t = fixClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixation* updates
    if (t >= 0.0 && fixation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation.tStart = t;  // (not accounting for frame time here)
      fixation.frameNStart = frameN;  // exact frame index
      
      fixation.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (fixation.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixation.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    fixComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fixRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'fix' ---
    fixComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('fix.stopped', globalClock.getTime());
    if (fixMaxDurationReached) {
        fixClock.add(fixMaxDuration);
    } else {
        fixClock.add(1.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trialMaxDurationReached;
var words;
var sentPos;
var maskChar;
var maskedWords;
var displayText;
var clock;
var trialMaxDuration;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trialClock.reset();
    routineTimer.reset();
    trialMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from trialCode
    psychoJS.eventManager.clearEvents();
    words = idiom.split(" ");
    sentPos = 0;
    
    words[words.length - 1] = words[words.length - 1].slice(0, -1);
    
    maskChar = "-";
    maskedWords = [];
    
    for (let i = 0; i < words.length; i++) {
        maskedWords.push(maskChar.repeat(words[i].length));
    }
    
    maskedWords[sentPos] = words[sentPos];
    displayText = (maskedWords.join(" ") + ".");
    trialText.setText(displayText);
    clock = new util.Clock();
    
    psychoJS.experiment.addData('trial.started', globalClock.getTime());
    trialMaxDuration = null
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(trialText);
    
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial' ---
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from trialCode
    let theseKeys = psychoJS.eventManager.getKeys();
    
    for (let key of theseKeys) {
        if (key === "escape") {
            psychoJS.quitExperiment();
            return;
        } else if (key === "space") {
            psychoJS.experiment.addData("readingTimes", clock.getTime());
            psychoJS.experiment.addData("sentPos", sentPos);
            psychoJS.experiment.addData("word", words[sentPos]);
            psychoJS.experiment.nextEntry();
            clock.reset();
    
            sentPos += 1;
            if (sentPos === words.length) {
                continueRoutine = false;
            } else {
                maskedWords = [];
                for (let i = 0; i < words.length; i++) {
                    maskedWords.push(maskChar.repeat(words[i].length));
                }
    
                // current word reveal
                maskedWords[sentPos] = words[sentPos];
                displayText = maskedWords.join(" ") + ".";
                trialText.setText(displayText);
            }
        }
    }
    
    
    if (trialText.status === PsychoJS.Status.STARTED){ // only update if being drawn
      trialText.setText(displayText, false);
    }
    
    // *trialText* updates
    if (t >= 0.0 && trialText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trialText.tStart = t;  // (not accounting for frame time here)
      trialText.frameNStart = frameN;  // exact frame index
      
      trialText.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial' ---
    trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('trial.stopped', globalClock.getTime());
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var questionMaxDurationReached;
var answers;
var ans1;
var ans2;
var ans3;
var correct;
var corrKey;
var questionMaxDuration;
var questionComponents;
function questionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'question' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    questionClock.reset();
    routineTimer.reset();
    questionMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from questionCode
    function setCorrKey(index) {
        if ((index === 0)) {
            corrKey = "a";
        } else {
            if ((index === 1)) {
                corrKey = "b";
            } else {
                if ((index === 2)) {
                    corrKey = "c";
                }
            }
        }
        return corrKey;
    }
    
    // empty buffer
    psychoJS.eventManager.clearEvents();
    questionText.setText("")
    
    // randomize multiple choice answer positions
    answers = [meaning_idiomatic, meaning_literal, meaning_distractor];
    util.shuffle(answers);
    
    // set answers for display in correct order
    ans1 = answers[0];
    ans2 = answers[1];
    ans3 = answers[2];
    
    // get index of correct answer
    if (((stimType === "experimental") || (stimType === "practice_e"))) {
        correct = util.index(answers, meaning_idiomatic);
    } else {
        if (((stimType === "filler") || (stimType === "practice_f"))) {
            correct = util.index(answers, meaning_literal);
        }
    }
    
    // set correct answer key
    corrKey = setCorrKey(correct);
    
    questionText.setPos([0, 0]);
    psychoJS.experiment.addData('question.started', globalClock.getTime());
    questionMaxDuration = null
    // keep track of which components have finished
    questionComponents = [];
    questionComponents.push(questionText);
    
    questionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var theseKeys;
var n;
var i;
var participantAnswer;
var questionCorrect;
function questionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'question' ---
    // get current time
    t = questionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from questionCode
    function getParticipantAnswer(key, ansList) {
        var answer;
        if ((key === "a")) {
            answer = ansList[0];
        } else {
            if ((key === "b")) {
                answer = ansList[1];
            } else {
                if ((key === "c")) {
                    answer = ansList[2];
                }
            }
        }
        if ((answer === meaning_idiomatic)) {
            answer = "idiomatic";
        }
        if ((answer === meaning_distractor)) {
            answer = "distractor";
        }
        if ((answer === meaning_literal)) {
            answer = "literal";
        }
        return answer;
    }
    theseKeys = psychoJS.eventManager.getKeys({keyList:["a", "b", "c", "escape"]});
    n = theseKeys.length;
    i = 0;
    participantAnswer = ""
    questionCorrect = undefined
    
    while ((n > i)) {
        if ((theseKeys[i] === "escape")) {
            quit();
            break;
        } else {
            if ((((theseKeys[i] === "a") || (theseKeys[i] === "b")) || (theseKeys[i] === "c"))) {
                participantAnswer = getParticipantAnswer(theseKeys[i], answers);
                if ((corrKey === theseKeys[i])) {
                    questionCorrect = 1;
                } else {
                    questionCorrect = 0;
                }
                psychoJS.experiment.addData("questionCorrect", questionCorrect);
                psychoJS.experiment.addData("participantAnswer", participantAnswer);
                psychoJS.experiment.nextEntry();
                continueRoutine = false;
                i += 1;
            }
        }
    }
    
    
    if (questionText.status === PsychoJS.Status.STARTED){ // only update if being drawn
      questionText.setText((((((("***** Wat betekent deze zin? *****\n\n\n(a) " + ans1) + "\n\n(b) ") + ans2) + "\n\n(c) ") + ans3) + "\n\n\nKies je antwoord met (a), (b) of (c)"), false);
    }
    
    // *questionText* updates
    if (t >= 0.0 && questionText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      questionText.tStart = t;  // (not accounting for frame time here)
      questionText.frameNStart = frameN;  // exact frame index
      
      questionText.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    questionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function questionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'question' ---
    questionComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('question.stopped', globalClock.getTime());
    // the Routine "question" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var feedbackMaxDurationReached;
var fb_text;
var fb_col;
var feedbackMaxDuration;
var feedbackComponents;
function feedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'feedback' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    feedbackClock.reset(routineTimer.getTime());
    routineTimer.add(1.000000);
    feedbackMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from fb_code
    fb_text = "no key_resp component found - look at the Std out window for info";
    fb_col = "black";
    try {
        if (questionCorrect) {
            fb_text = "O";
            fb_col = "green";
        } else {
            fb_text = "X";
            fb_col = "red";
        }
    } catch(e) {
        console.log("Make sure that you have:\n1. a routine with a keyboard component in it called \"key_resp\"\n 2. In the key_Resp component in the \"data\" tab select \"Store Correct\".\n in the \"Correct answer\" field use \"$corrAns\" (where corrAns is a column header in your conditions file indicating the correct key press");
    }
    
    fb.setColor(new util.Color(fb_col));
    fb.setText(fb_text);
    psychoJS.experiment.addData('feedback.started', globalClock.getTime());
    feedbackMaxDuration = null
    // keep track of which components have finished
    feedbackComponents = [];
    feedbackComponents.push(fb);
    
    feedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function feedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'feedback' ---
    // get current time
    t = feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fb* updates
    if (t >= 0.0 && fb.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fb.tStart = t;  // (not accounting for frame time here)
      fb.frameNStart = frameN;  // exact frame index
      
      fb.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (fb.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fb.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    feedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'feedback' ---
    feedbackComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('feedback.stopped', globalClock.getTime());
    if (feedbackMaxDurationReached) {
        feedbackClock.add(feedbackMaxDuration);
    } else {
        feedbackClock.add(1.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var startMaxDurationReached;
var _keyStart_allKeys;
var startMaxDuration;
var startComponents;
function startRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'start' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    startClock.reset();
    routineTimer.reset();
    startMaxDurationReached = false;
    // update component parameters for each repeat
    keyStart.keys = undefined;
    keyStart.rt = undefined;
    _keyStart_allKeys = [];
    psychoJS.experiment.addData('start.started', globalClock.getTime());
    startMaxDuration = null
    // keep track of which components have finished
    startComponents = [];
    startComponents.push(textStart);
    startComponents.push(keyStart);
    
    startComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function startRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'start' ---
    // get current time
    t = startClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textStart* updates
    if (t >= 0.0 && textStart.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textStart.tStart = t;  // (not accounting for frame time here)
      textStart.frameNStart = frameN;  // exact frame index
      
      textStart.setAutoDraw(true);
    }
    
    
    // *keyStart* updates
    if (t >= 0.0 && keyStart.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      keyStart.tStart = t;  // (not accounting for frame time here)
      keyStart.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { keyStart.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { keyStart.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { keyStart.clearEvents(); });
    }
    
    if (keyStart.status === PsychoJS.Status.STARTED) {
      let theseKeys = keyStart.getKeys({keyList: ['space'], waitRelease: false});
      _keyStart_allKeys = _keyStart_allKeys.concat(theseKeys);
      if (_keyStart_allKeys.length > 0) {
        keyStart.keys = _keyStart_allKeys[0].name;  // just the first key pressed
        keyStart.rt = _keyStart_allKeys[0].rt;
        keyStart.duration = _keyStart_allKeys[0].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    startComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function startRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'start' ---
    startComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('start.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(keyStart.corr, level);
    }
    psychoJS.experiment.addData('keyStart.keys', keyStart.keys);
    if (typeof keyStart.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('keyStart.rt', keyStart.rt);
        psychoJS.experiment.addData('keyStart.duration', keyStart.duration);
        routineTimer.reset();
        }
    
    keyStart.stop();
    // the Routine "start" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var pauseMaxDurationReached;
var _pj;
var text;
var _pauseKey_allKeys;
var pauseMaxDuration;
var pauseComponents;
function pauseRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'pause' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    pauseClock.reset();
    routineTimer.reset();
    pauseMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from pauseCode
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    if (_pj.in_es6((trials.thisN + 1), breakOn.slice(0, (- 1)))) {
        continueRoutine = true;
        breakN += 1;
        text = `Dit was blok ${breakN} van de ${breakOn.length}. 
        
        Druk op de spatiebalk om verder te gaan als je er klaar voor bent.`;
        pauseText.setText(text);
    } else {
        continueRoutine = false;
    }
    
    pauseText.setText(text);
    pauseKey.keys = undefined;
    pauseKey.rt = undefined;
    _pauseKey_allKeys = [];
    psychoJS.experiment.addData('pause.started', globalClock.getTime());
    pauseMaxDuration = null
    // keep track of which components have finished
    pauseComponents = [];
    pauseComponents.push(pauseText);
    pauseComponents.push(pauseKey);
    
    pauseComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function pauseRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'pause' ---
    // get current time
    t = pauseClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *pauseText* updates
    if (t >= 0.0 && pauseText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pauseText.tStart = t;  // (not accounting for frame time here)
      pauseText.frameNStart = frameN;  // exact frame index
      
      pauseText.setAutoDraw(true);
    }
    
    
    // *pauseKey* updates
    if (t >= 0.0 && pauseKey.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pauseKey.tStart = t;  // (not accounting for frame time here)
      pauseKey.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { pauseKey.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { pauseKey.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { pauseKey.clearEvents(); });
    }
    
    if (pauseKey.status === PsychoJS.Status.STARTED) {
      let theseKeys = pauseKey.getKeys({keyList: ['space'], waitRelease: false});
      _pauseKey_allKeys = _pauseKey_allKeys.concat(theseKeys);
      if (_pauseKey_allKeys.length > 0) {
        pauseKey.keys = _pauseKey_allKeys[_pauseKey_allKeys.length - 1].name;  // just the last key pressed
        pauseKey.rt = _pauseKey_allKeys[_pauseKey_allKeys.length - 1].rt;
        pauseKey.duration = _pauseKey_allKeys[_pauseKey_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    pauseComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function pauseRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'pause' ---
    pauseComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('pause.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(pauseKey.corr, level);
    }
    psychoJS.experiment.addData('pauseKey.keys', pauseKey.keys);
    if (typeof pauseKey.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('pauseKey.rt', pauseKey.rt);
        psychoJS.experiment.addData('pauseKey.duration', pauseKey.duration);
        routineTimer.reset();
        }
    
    pauseKey.stop();
    // the Routine "pause" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var endMaxDurationReached;
var endMaxDuration;
var endComponents;
function endRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'end' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    endClock.reset();
    routineTimer.reset();
    endMaxDurationReached = false;
    // update component parameters for each repeat
    // Disable downloading results to browser
    psychoJS._saveResults = 0;
    
    // Generate filename for results
    let filename = expInfo["group"] + "_group_participant_" + expInfo["participant"] + "_" + psychoJS._experiment._experimentName + '_' + psychoJS._experiment._datetime;
    
    // Extract data object from experiment and convert to JSON
    let dataJSON = JSON.stringify(psychoJS.experiment._trialsData);
    
    fetch("https://pipe.jspsych.org/api/data/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "*/*",
          },
          body: JSON.stringify({
            experimentID: "mTRdgdPYEvkD",
            filename: `${filename}.json`,
            data: dataJSON,
          }),
    }).then(response => response.json()).then(data => {
        console.log(data);
        quitPsychoJS("Alles is opgeslagen. Bedankt voor het meedoen!", true);
    });
    
    psychoJS.experiment.addData('end.started', globalClock.getTime());
    endMaxDuration = null
    // keep track of which components have finished
    endComponents = [];
    endComponents.push(textEnd);
    
    endComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function endRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'end' ---
    // get current time
    t = endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textEnd* updates
    if (t >= 0.0 && textEnd.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textEnd.tStart = t;  // (not accounting for frame time here)
      textEnd.frameNStart = frameN;  // exact frame index
      
      textEnd.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    endComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function endRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'end' ---
    endComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('end.stopped', globalClock.getTime());
    // the Routine "end" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
