const SYNTHI_SCHEMA = {
  "attributes": [
    { "name": "complexity", "values": ["multilayered", "simple"] },
    { "name": "quality", "values": ["pitched", "non-pitched"] },
    { "name": "range", "values": ["low", "mid", "high"] },
    { "name": "type", "values": ["rhythmical", "melodic", "drone", "noise"] }
  ],
  "audio_panel": [
    { "name": "signal", "module": "reverberation-1" },
    { "name": "signal", "module": "reverberation-2" },
    { "name": "a", "module": "ring-modulator-1" },
    { "name": "b", "module": "ring-modulator-1" },
    { "name": "a", "module": "ring-modulator-2" },
    { "name": "b", "module": "ring-modulator-2" },
    { "name": "a", "module": "ring-modulator-3" },
    { "name": "b", "module": "ring-modulator-3" },
    { "name": "signal", "module": "envelope-shaper-1" },
    { "name": "signal", "module": "envelope-shaper-2" },
    { "name": "signal", "module": "envelope-shaper-3" },
    { "name": "trigger", "module": "envelope-shaper-1" },
    { "name": "trigger", "module": "envelope-shaper-2" },
    { "name": "trigger", "module": "envelope-shaper-3" },
    { "name": "signal", "module": "filter-1" },
    { "name": "signal", "module": "filter-2" },
    { "name": "signal", "module": "filter-3" },
    { "name": "signal", "module": "filter-4" },
    { "name": "signal", "module": "filter-5" },
    { "name": "signal", "module": "filter-6" },
    { "name": "signal", "module": "filter-7" },
    { "name": "signal", "module": "filter-8" },
    { "name": "signal", "module": "octave-filter-bank" },
    { "name": "synchronisation", "module": "oscillator-1" },
    { "name": "synchronisation", "module": "oscillator-2" },
    { "name": "synchronisation", "module": "oscillator-3" },
    { "name": "synchronisation", "module": "oscillator-4" },
    { "name": "synchronisation", "module": "oscillator-5" },
    { "name": "synchronisation", "module": "oscillator-6" },
    { "name": "synchronisation", "module": "oscillator-7" },
    { "name": "synchronisation", "module": "oscillator-8" },
    { "name": "synchronisation", "module": "oscillator-9" },
    { "name": "synchronisation", "module": "oscillator-10" },
    { "name": "synchronisation", "module": "oscillator-11" },
    { "name": "synchronisation", "module": "oscillator-12" },
    { "name": "signal", "module": "output-ch-1" },
    { "name": "signal", "module": "output-ch-2" },
    { "name": "signal", "module": "output-ch-3" },
    { "name": "signal", "module": "output-ch-4" },
    { "name": "signal", "module": "output-ch-5" },
    { "name": "signal", "module": "output-ch-6" },
    { "name": "signal", "module": "output-ch-7" },
    { "name": "signal", "module": "output-ch-8" },
    { "name": "send-1", "module": "external-treatment" },
    { "name": "send-2", "module": "external-treatment" },
    { "name": "send-3", "module": "external-treatment" },
    { "name": "send-4", "module": "external-treatment" },
    { "name": "signal", "module": "envelope-follower-1" },
    { "name": "signal", "module": "envelope-follower-2" },
    { "name": "signal", "module": "pitch-voltage-converter" },
    { "name": "clock", "module": "sequencer" },
    { "name": "reset", "module": "sequencer" },
    { "name": "start", "module": "sequencer" },
    { "name": "stop", "module": "sequencer" },
    { "name": "signal", "module": "frequency-meter" },
    { "name": "y1", "module": "scope" },
    { "name": "y2", "module": "scope" },
    { "name": "x", "module": "scope" },
    { "name": "", "module": "" },
    { "name": "ground", "module": "ground" },
    { "name": "signal", "module": "input-amplifier-level" },
    { "name": "signal", "module": "input-amplifier-level" },
    { "name": "signal", "module": "input-amplifier-level" },
    { "name": "signal", "module": "input-amplifier-level" },
    { "name": "signal", "module": "input-amplifier-level" },
    { "name": "signal", "module": "input-amplifier-level" },
    { "name": "signal", "module": "input-amplifier-level" },
    { "name": "signal", "module": "input-amplifier-level" },
    { "name": "signal", "module": "output-ch-1" },
    { "name": "signal", "module": "output-ch-2" },
    { "name": "signal", "module": "output-ch-3" },
    { "name": "signal", "module": "output-ch-4" },
    { "name": "signal", "module": "output-ch-5" },
    { "name": "signal", "module": "output-ch-6" },
    { "name": "signal", "module": "output-ch-7" },
    { "name": "signal", "module": "output-ch-8" },
    { "name": "return-1", "module": "external-treatment" },
    { "name": "return-2", "module": "external-treatment" },
    { "name": "return-3", "module": "external-treatment" },
    { "name": "return-4", "module": "external-treatment" },
    { "name": "key-4", "module": "sequencer" },
    { "name": "clock", "module": "sequencer" },
    { "name": "signal", "module": "noise-generator-1" },
    { "name": "signal", "module": "noise-generator-2" },
    { "name": "sine", "module": "oscillator-1" },
    { "name": "ramp", "module": "oscillator-1" },
    { "name": "sine", "module": "oscillator-2" },
    { "name": "ramp", "module": "oscillator-2" },
    { "name": "sine", "module": "oscillator-3" },
    { "name": "ramp", "module": "oscillator-3" },
    { "name": "sine", "module": "oscillator-4" },
    { "name": "ramp", "module": "oscillator-4" },
    { "name": "sine", "module": "oscillator-5" },
    { "name": "ramp", "module": "oscillator-5" },
    { "name": "sine", "module": "oscillator-6" },
    { "name": "ramp", "module": "oscillator-6" },
    { "name": "square/pulse", "module": "oscillator-7" },
    { "name": "triang/ramp", "module": "oscillator-7" },
    { "name": "square/pulse", "module": "oscillator-8" },
    { "name": "triang/ramp", "module": "oscillator-8" },
    { "name": "square/pulse", "module": "oscillator-9" },
    { "name": "triang/ramp", "module": "oscillator-9" },
    { "name": "signal", "module": "octave-filter-bank" },
    { "name": "signal", "module": "filter-1" },
    { "name": "signal", "module": "filter-2" },
    { "name": "signal", "module": "filter-3" },
    { "name": "signal", "module": "filter-4" },
    { "name": "signal", "module": "filter-5" },
    { "name": "signal", "module": "filter-6" },
    { "name": "signal", "module": "filter-7" },
    { "name": "signal", "module": "filter-8" },
    { "name": "signal", "module": "envelope-shaper-1" },
    { "name": "signal", "module": "envelope-shaper-2" },
    { "name": "signal", "module": "envelope-shaper-3" },
    { "name": "signal", "module": "ring-modulator-1" },
    { "name": "signal", "module": "ring-modulator-2" },
    { "name": "signal", "module": "ring-modulator-3" },
    { "name": "signal", "module": "reverberation-1" },
    { "name": "signal", "module": "reverberation-2" },
    { "name": "ground", "module": "ground" }
  ],
  "control_panel": [
    { "name": "mix", "module": "reverberation-1" },
    { "name": "mix", "module": "reverberation-2" },
    { "name": "key", "module": "envelope-shaper-1" },
    { "name": "delay", "module": "envelope-shaper-1" },
    { "name": "attack", "module": "envelope-shaper-1" },
    { "name": "on", "module": "envelope-shaper-1" },
    { "name": "decay", "module": "envelope-shaper-1" },
    { "name": "key", "module": "envelope-shaper-2" },
    { "name": "delay", "module": "envelope-shaper-2" },
    { "name": "attack", "module": "envelope-shaper-2" },
    { "name": "on", "module": "envelope-shaper-2" },
    { "name": "decay", "module": "envelope-shaper-2" },
    { "name": "key", "module": "envelope-shaper-3" },
    { "name": "delay", "module": "envelope-shaper-3" },
    { "name": "attack", "module": "envelope-shaper-3" },
    { "name": "on", "module": "envelope-shaper-3" },
    { "name": "decay", "module": "envelope-shaper-3" },
    { "name": "frequency-control", "module": "filter-1" },
    { "name": "frequency-control", "module": "filter-2" },
    { "name": "frequency-control", "module": "filter-3" },
    { "name": "frequency-control", "module": "filter-4" },
    { "name": "frequency-control", "module": "filter-5" },
    { "name": "frequency-control", "module": "filter-6" },
    { "name": "frequency-control", "module": "filter-7" },
    { "name": "frequency-control", "module": "filter-8" },
    { "name": "frequency-control", "module": "oscillator-1" },
    { "name": "frequency-control", "module": "oscillator-2" },
    { "name": "frequency-control", "module": "oscillator-3" },
    { "name": "frequency-control", "module": "oscillator-4" },
    { "name": "frequency-control", "module": "oscillator-5" },
    { "name": "frequency-control", "module": "oscillator-6" },
    { "name": "frequency-control", "module": "oscillator-7" },
    { "name": "frequency-control", "module": "oscillator-8" },
    { "name": "frequency-control", "module": "oscillator-9" },
    { "name": "frequency-control", "module": "oscillator-10" },
    { "name": "frequency-control", "module": "oscillator-11" },
    { "name": "frequency-control", "module": "oscillator-12" },
    { "name": "voltage-input", "module": "output-ch-1" },
    { "name": "voltage-input", "module": "output-ch-2" },
    { "name": "voltage-input", "module": "output-ch-3" },
    { "name": "voltage-input", "module": "output-ch-4" },
    { "name": "level-control", "module": "output-ch-1" },
    { "name": "level-control", "module": "output-ch-2" },
    { "name": "level-control", "module": "output-ch-3" },
    { "name": "level-control", "module": "output-ch-4" },
    { "name": "level-control", "module": "output-ch-5" },
    { "name": "level-control", "module": "output-ch-6" },
    { "name": "level-control", "module": "output-ch-7" },
    { "name": "level-control", "module": "output-ch-8" },
    { "name": "voltage-input", "module": "slew-limiter-1" },
    { "name": "voltage-input", "module": "slew-limiter-2" },
    { "name": "voltage-input", "module": "slew-limiter-3" },
    { "name": "slew-control", "module": "slew-limiter-1" },
    { "name": "slew-control", "module": "slew-limiter-2" },
    { "name": "slew-control", "module": "slew-limiter-3" },
    { "name": "ACE", "module": "sequencer" },
    { "name": "BDF", "module": "sequencer" },
    { "name": "key", "module": "sequencer" },
    { "name": "y1", "module": "scope" },
    { "name": "ground", "module": "ground" },
    { "name": "signal", "module": "input-amplifier-level" },
    { "name": "signal", "module": "input-amplifier-level" },
    { "name": "signal", "module": "input-amplifier-level" },
    { "name": "signal", "module": "input-amplifier-level" },
    { "name": "signal", "module": "input-amplifier-level" },
    { "name": "signal", "module": "input-amplifier-level" },
    { "name": "signal", "module": "input-amplifier-level" },
    { "name": "signal", "module": "input-amplifier-level" },
    { "name": "signal", "module": "output-ch-1" },
    { "name": "signal", "module": "output-ch-2" },
    { "name": "signal", "module": "output-ch-3" },
    { "name": "signal", "module": "output-ch-4" },
    { "name": "signal", "module": "output-ch-5" },
    { "name": "signal", "module": "output-ch-6" },
    { "name": "signal", "module": "output-ch-7" },
    { "name": "signal", "module": "output-ch-8" },
    { "name": "square/pulse", "module": "oscillator-10" },
    { "name": "triang/ramp", "module": "oscillator-10" },
    { "name": "square/pulse", "module": "oscillator-11" },
    { "name": "triang/ramp", "module": "oscillator-11" },
    { "name": "square/pulse", "module": "oscillator-12" },
    { "name": "triang/ramp", "module": "oscillator-12" },
    { "name": "key", "module": "random-control-voltage-generator" },
    { "name": "voltage-1", "module": "random-control-voltage-generator" },
    { "name": "voltage-2", "module": "random-control-voltage-generator" },
    { "name": "signal", "module": "envelope-follower-1" },
    { "name": "signal", "module": "envelope-follower-2" },
    { "name": "signal", "module": "slew-limiter-1" },
    { "name": "signal", "module": "slew-limiter-2" },
    { "name": "signal", "module": "slew-limiter-3" },
    { "name": "trapezoid-1", "module": "envelope-shaper-1" },
    { "name": "trapezoid-2", "module": "envelope-shaper-1" },
    { "name": "trapezoid-1", "module": "envelope-shaper-2" },
    { "name": "trapezoid-2", "module": "envelope-shaper-2" },
    { "name": "trapezoid-1", "module": "envelope-shaper-3" },
    { "name": "trapezoid-2", "module": "envelope-shaper-3" },
    { "name": "voltage-a", "module": "sequencer" },
    { "name": "voltage-b", "module": "sequencer" },
    { "name": "key-1", "module": "sequencer" },
    { "name": "voltage-c", "module": "sequencer" },
    { "name": "voltage-d", "module": "sequencer" },
    { "name": "key-2", "module": "sequencer" },
    { "name": "voltage-e", "module": "sequencer" },
    { "name": "voltage-f", "module": "sequencer" },
    { "name": "key-3", "module": "sequencer" },
    { "name": "key-4", "module": "sequencer" },
    { "name": "clock-rate", "module": "sequencer" },
    { "name": "pitch", "module": "upper-keyboard" },
    { "name": "velocity", "module": "upper-keyboard" },
    { "name": "env-control", "module": "upper-keyboard" },
    { "name": "pitch", "module": "lower-keyboard" },
    { "name": "velocity", "module": "lower-keyboard" },
    { "name": "env-control", "module": "lower-keyboard" },
    { "name": "up/down", "module": "left-joystick" },
    { "name": "left/right", "module": "left-joystick" },
    { "name": "up/down", "module": "right-joystick" },
    { "name": "left/right", "module": "right-joystick" },
    { "name": "signal", "module": "pitch-voltage-converter" },
    { "name": "", "module": "" },
    { "name": "ground", "module": "ground" }
  ],
  "modules": [
    {
      "name": "output-ch-7",
      "controls": [
        { "name": "filter", "type": "knob" },
        { "name": "pan", "type": "knob" },
        { "name": "enabled", "positions": ["off", "on"], "type": "switch" },
        { "name": "level", "type": "knob" }
      ]
    },
    { "name": "", "controls": [] },
    {
      "name": "envelope-shaper-1",
      "controls": [
        { "name": "delay", "type": "knob" },
        { "name": "attack", "type": "knob" },
        { "name": "on", "type": "knob" },
        { "name": "decay", "type": "knob" },
        { "name": "trapezoid-1", "type": "knob" },
        { "name": "trapezoid-2", "type": "knob" },
        { "name": "signal-level", "type": "knob" },
        {
          "name": "trigger-mode",
          "positions": ["free-run", "hold-on", "single-cycle", "multi-cycle"],
          "type": "switch"
        }
      ]
    },
    {
      "name": "filter-4",
      "controls": [
        { "name": "frequency", "type": "knob" },
        { "name": "response", "type": "knob" },
        { "name": "level", "type": "knob" }
      ]
    },
    { "name": "right-joystick", "controls": [] },
    {
      "name": "oscillator-2",
      "controls": [
        { "name": "sine-shape", "type": "knob" },
        { "name": "sine-level", "type": "knob" },
        { "name": "ramp-level", "type": "knob" },
        { "name": "frequency", "type": "knob" }
      ]
    },
    {
      "name": "output-ch-3",
      "controls": [
        { "name": "filter", "type": "knob" },
        { "name": "pan", "type": "knob" },
        { "name": "enabled", "positions": ["off", "on"], "type": "switch" },
        { "name": "level", "type": "knob" }
      ]
    },
    {
      "name": "oscillator-6",
      "controls": [
        { "name": "sine-shape", "type": "knob" },
        { "name": "sine-level", "type": "knob" },
        { "name": "ramp-level", "type": "knob" },
        { "name": "frequency", "type": "knob" }
      ]
    },
    {
      "name": "slew-limiter-1",
      "controls": [{ "name": "slew-rate", "type": "knob" }]
    },
    {
      "name": "oscillator-12",
      "controls": [
        { "name": "square-shape", "type": "knob" },
        { "name": "square-range", "type": "knob" },
        { "name": "ramp-shape", "type": "knob" },
        { "name": "ramp-range", "type": "knob" },
        { "name": "period", "type": "knob" }
      ]
    },
    {
      "name": "noise-generator-1",
      "controls": [
        { "name": "colour", "type": "knob" },
        { "name": "level", "type": "knob" }
      ]
    },
    { "name": "scope", "controls": [] },
    {
      "name": "ring-modulator-2",
      "controls": [{ "name": "level", "type": "knob" }]
    },
    {
      "name": "octave-filter-bank",
      "controls": [
        { "name": "63", "type": "knob" },
        { "name": "125", "type": "knob" },
        { "name": "250", "type": "knob" },
        { "name": "500", "type": "knob" },
        { "name": "1000", "type": "knob" },
        { "name": "2000", "type": "knob" },
        { "name": "4000", "type": "knob" },
        { "name": "8000", "type": "knob" }
      ]
    },
    {
      "name": "oscillator-7",
      "controls": [
        { "name": "square-shape", "type": "knob" },
        { "name": "square-level", "type": "knob" },
        { "name": "ramp-shape", "type": "knob" },
        { "name": "ramp-level", "type": "knob" },
        { "name": "frequency", "type": "knob" }
      ]
    },
    {
      "name": "oscillator-11",
      "controls": [
        { "name": "square-shape", "type": "knob" },
        { "name": "square-range", "type": "knob" },
        { "name": "ramp-shape", "type": "knob" },
        { "name": "ramp-range", "type": "knob" },
        { "name": "period", "type": "knob" }
      ]
    },
    {
      "name": "filter-3",
      "controls": [
        { "name": "frequency", "type": "knob" },
        { "name": "response", "type": "knob" },
        { "name": "level", "type": "knob" }
      ]
    },
    {
      "name": "output-ch-6",
      "controls": [
        { "name": "filter", "type": "knob" },
        { "name": "pan", "type": "knob" },
        { "name": "enabled", "positions": ["off", "on"], "type": "switch" },
        { "name": "level", "type": "knob" }
      ]
    },
    {
      "name": "oscillator-9",
      "controls": [
        { "name": "square-shape", "type": "knob" },
        { "name": "square-level", "type": "knob" },
        { "name": "ramp-shape", "type": "knob" },
        { "name": "ramp-level", "type": "knob" },
        { "name": "frequency", "type": "knob" }
      ]
    },
    {
      "name": "noise-generator-2",
      "controls": [
        { "name": "colour", "type": "knob" },
        { "name": "level", "type": "knob" }
      ]
    },
    {
      "name": "filter-6",
      "controls": [
        { "name": "frequency", "type": "knob" },
        { "name": "response", "type": "knob" },
        { "name": "level", "type": "knob" }
      ]
    },
    {
      "name": "oscillator-1",
      "controls": [
        { "name": "sine-shape", "type": "knob" },
        { "name": "sine-level", "type": "knob" },
        { "name": "ramp-level", "type": "knob" },
        { "name": "frequency", "type": "knob" }
      ]
    },
    {
      "name": "ring-modulator-3",
      "controls": [{ "name": "level", "type": "knob" }]
    },
    {
      "name": "filter-7",
      "controls": [
        { "name": "frequency", "type": "knob" },
        { "name": "response", "type": "knob" },
        { "name": "level", "type": "knob" }
      ]
    },
    {
      "name": "oscillator-4",
      "controls": [
        { "name": "sine-shape", "type": "knob" },
        { "name": "sine-level", "type": "knob" },
        { "name": "ramp-level", "type": "knob" },
        { "name": "frequency", "type": "knob" }
      ]
    },
    { "name": "left-joystick", "controls": [] },
    {
      "name": "output-ch-1",
      "controls": [
        { "name": "filter", "type": "knob" },
        { "name": "pan", "type": "knob" },
        { "name": "enabled", "positions": ["off", "on"], "type": "switch" },
        { "name": "level", "type": "knob" }
      ]
    },
    {
      "name": "oscillator-8",
      "controls": [
        { "name": "square-shape", "type": "knob" },
        { "name": "square-level", "type": "knob" },
        { "name": "ramp-shape", "type": "knob" },
        { "name": "ramp-level", "type": "knob" },
        { "name": "frequency", "type": "knob" }
      ]
    },
    { "name": "ground", "controls": [] },
    { "name": "lower-keyboard", "controls": [] },
    { "name": "upper-keyboard", "controls": [] },
    {
      "name": "output-ch-4",
      "controls": [
        { "name": "filter", "type": "knob" },
        { "name": "pan", "type": "knob" },
        { "name": "enabled", "positions": ["off", "on"], "type": "switch" },
        { "name": "level", "type": "knob" }
      ]
    },
    {
      "name": "output-ch-5",
      "controls": [
        { "name": "filter", "type": "knob" },
        { "name": "pan", "type": "knob" },
        { "name": "enabled", "positions": ["off", "on"], "type": "switch" },
        { "name": "level", "type": "knob" }
      ]
    },
    {
      "name": "reverberation-1",
      "controls": [
        { "name": "level", "type": "knob" },
        { "name": "mix", "type": "knob" }
      ]
    },
    {
      "name": "envelope-follower-2",
      "controls": [{ "name": "range", "type": "knob" }]
    },
    {
      "name": "filter-2",
      "controls": [
        { "name": "frequency", "type": "knob" },
        { "name": "response", "type": "knob" },
        { "name": "level", "type": "knob" }
      ]
    },
    {
      "name": "slew-limiter-3",
      "controls": [{ "name": "slew-rate", "type": "knob" }]
    },
    {
      "name": "oscillator-10",
      "controls": [
        { "name": "square-shape", "type": "knob" },
        { "name": "square-range", "type": "knob" },
        { "name": "ramp-shape", "type": "knob" },
        { "name": "ramp-range", "type": "knob" },
        { "name": "period", "type": "knob" }
      ]
    },
    {
      "name": "envelope-shaper-3",
      "controls": [
        { "name": "delay", "type": "knob" },
        { "name": "attack", "type": "knob" },
        { "name": "on", "type": "knob" },
        { "name": "decay", "type": "knob" },
        { "name": "trapezoid-1", "type": "knob" },
        { "name": "trapezoid-2", "type": "knob" },
        { "name": "signal-level", "type": "knob" },
        {
          "name": "trigger-mode",
          "positions": ["free-run", "hold-on", "single-cycle", "multi-cycle"],
          "type": "switch"
        }
      ]
    },
    {
      "name": "oscillator-5",
      "controls": [
        { "name": "sine-shape", "type": "knob" },
        { "name": "sine-level", "type": "knob" },
        { "name": "ramp-level", "type": "knob" },
        { "name": "frequency", "type": "knob" }
      ]
    },
    {
      "name": "output-ch-2",
      "controls": [
        { "name": "filter", "type": "knob" },
        { "name": "pan", "type": "knob" },
        { "name": "enabled", "positions": ["off", "on"], "type": "switch" },
        { "name": "level", "type": "knob" }
      ]
    },
    {
      "name": "filter-1",
      "controls": [
        { "name": "frequency", "type": "knob" },
        { "name": "response", "type": "knob" },
        { "name": "level", "type": "knob" }
      ]
    },
    {
      "name": "slew-limiter-2",
      "controls": [{ "name": "slew-rate", "type": "knob" }]
    },
    {
      "name": "output-ch-8",
      "controls": [
        { "name": "filter", "type": "knob" },
        { "name": "pan", "type": "knob" },
        { "name": "enabled", "positions": ["off", "on"], "type": "switch" },
        { "name": "level", "type": "knob" }
      ]
    },
    {
      "name": "oscillator-3",
      "controls": [
        { "name": "sine-shape", "type": "knob" },
        { "name": "sine-level", "type": "knob" },
        { "name": "ramp-level", "type": "knob" },
        { "name": "frequency", "type": "knob" }
      ]
    },
    {
      "name": "envelope-shaper-2",
      "controls": [
        { "name": "delay", "type": "knob" },
        { "name": "attack", "type": "knob" },
        { "name": "on", "type": "knob" },
        { "name": "decay", "type": "knob" },
        { "name": "trapezoid-1", "type": "knob" },
        { "name": "trapezoid-2", "type": "knob" },
        { "name": "signal-level", "type": "knob" },
        {
          "name": "trigger-mode",
          "positions": ["free-run", "hold-on", "single-cycle", "multi-cycle"],
          "type": "switch"
        }
      ]
    },
    { "name": "sequencer", "controls": [] },
    { "name": "frequency-meter", "controls": [] },
    {
      "name": "filter-5",
      "controls": [
        { "name": "frequency", "type": "knob" },
        { "name": "response", "type": "knob" },
        { "name": "level", "type": "knob" }
      ]
    },
    {
      "name": "filter-8",
      "controls": [
        { "name": "frequency", "type": "knob" },
        { "name": "response", "type": "knob" },
        { "name": "level", "type": "knob" }
      ]
    },
    {
      "name": "reverberation-2",
      "controls": [
        { "name": "level", "type": "knob" },
        { "name": "mix", "type": "knob" }
      ]
    },
    {
      "name": "ring-modulator-1",
      "controls": [{ "name": "level", "type": "knob" }]
    },
    { "name": "external-treatment", "controls": [] },
    {
      "name": "input-amplifier-level",
      "controls": [
        { "name": "channel-level-1", "type": "knob" },
        { "name": "channel-level-2", "type": "knob" },
        { "name": "channel-level-3", "type": "knob" },
        { "name": "channel-level-4", "type": "knob" },
        { "name": "channel-level-5", "type": "knob" },
        { "name": "channel-level-6", "type": "knob" },
        { "name": "channel-level-7", "type": "knob" },
        { "name": "channel-level-8", "type": "knob" }
      ]
    },
    {
      "name": "random-control-voltage-generator",
      "controls": [
        { "name": "mean", "type": "knob" },
        { "name": "variance", "type": "knob" },
        { "name": "voltage-1", "type": "knob" },
        { "name": "voltage-2", "type": "knob" },
        { "name": "key", "type": "knob" }
      ]
    },
    {
      "name": "pitch-voltage-converter",
      "controls": [
        { "name": "range", "type": "knob" },
        { "name": "range", "type": "knob" }
      ]
    },
    {
      "name": "envelope-follower-1",
      "controls": [{ "name": "range", "type": "knob" }]
    }
  ]
}
