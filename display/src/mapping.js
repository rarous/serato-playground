export const data = {
  midi: {
    "@app": "2.6.0.1235",
    control: [
      {
        "@channel": 15,
        "@event_type": "Control Change",
        "@control": 18,
        userio: {
          "@event": "click",
          per_deck_pitch_slider_pickup_position: {
            "@deck_set": "Default",
            "@deck_id": 1,
            "@slot_id": 2,
            translation: {
              "@action_on": "any",
              "@behaviour": "explicit",
              "#text": null,
            },
          },
          pitch_slider: {
            "@deck_set": "Default",
            "@deck_id": 1,
            "@slot_id": 0,
            translation: {
              "@action_on": "any",
              "@behaviour": "explicit",
              "#text": null,
            },
          },
        },
      },
      {
        "@channel": 14,
        "@event_type": "Note On",
        "@control": 14,
        userio: [
          {
            "@event": "click",
            load_track: {
              "@deck_set": "Default",
              "@deck_id": 3,
              "@slot_id": 0,
              translation: {
                "@action_on": "press",
                "@behaviour": "explicit",
                "#text": null,
              },
            },
          },
          {
            "@event": "output",
            load_track_feedback: {
              "@deck_set": "Default",
              "@deck_id": 3,
              "@slot_id": 0,
              translation: {
                "@action_on": "any",
                alias: [
                  { "@name": "off", "@value": 0, "#text": null },
                  { "@name": "on", "@value": 127, "#text": null },
                ],
              },
            },
          },
        ],
      },
      {
        "@channel": 15,
        "@event_type": "Control Change",
        "@data_type": "Absolute 7",
        "@control": 10,
        case: [
          {
            condition: {
              effect_bank_mode: {
                "@deck_set": "DJ Effects",
                "@deck_id": 1,
                "@slot_id": 0,
                "@operator": "equal",
                "@cmp_value": "Single Mode",
                "#text": null,
              },
            },
            userio: {
              "@event": "click",
              effect_slot_parameter_3: {
                "@deck_set": "DJ Effects",
                "@deck_id": 1,
                "@slot_id": 0,
                translation: {
                  "@action_on": "any",
                  "@behaviour": "explicit",
                  "#text": null,
                },
              },
            },
          },
          {
            condition: {
              effect_bank_mode: {
                "@deck_set": "DJ Effects",
                "@deck_id": 1,
                "@slot_id": 0,
                "@operator": "equal",
                "@cmp_value": "Multi Mode",
                "#text": null,
              },
            },
            userio: {
              "@event": "click",
              effect_level_1_slot_parameter_1: {
                "@deck_set": "DJ Effects",
                "@deck_id": 1,
                "@slot_id": 3,
                translation: {
                  "@action_on": "any",
                  "@behaviour": "explicit",
                  "#text": null,
                },
              },
            },
          },
        ],
      },
      {
        "@channel": 14,
        "@event_type": "Note On",
        "@control": 29,
        userio: [
          {
            "@event": "click",
            beat_jump_step: {
              "@deck_set": "Default",
              "@deck_id": 1,
              "@slot_id": 7,
              translation: {
                "@action_on": "press",
                "@behaviour": "explicit",
                "#text": null,
              },
            },
          },
          {
            "@event": "output",
            beat_jump_step: {
              "@deck_set": "Default",
              "@deck_id": 1,
              "@slot_id": 7,
              translation: {
                "@action_on": "any",
                alias: [
                  { "@name": "on", "@value": 127, "#text": null },
                  { "@name": "off", "@value": 0, "#text": null },
                ],
              },
            },
          },
        ],
      },
      {
        "@channel": 15,
        "@event_type": "Note On",
        "@control": 62,
        userio: [
          {
            "@event": "click",
            cue: {
              "@deck_set": "Default",
              "@deck_id": 0,
              "@slot_id": 0,
              translation: {
                "@action_on": "any",
                "@behaviour": "explicit",
                "#text": null,
              },
            },
          },
          {
            "@event": "output",
            cue: {
              "@deck_set": "Default",
              "@deck_id": 0,
              "@slot_id": 0,
              translation: {
                "@action_on": "any",
                alias: [
                  { "@name": "on", "@value": 127, "#text": null },
                  { "@name": "off", "@value": 0, "#text": null },
                ],
              },
            },
          },
        ],
      },
      {
        "@channel": 15,
        "@event_type": "Note On",
        "@control": 35,
        userio: [
          {
            "@event": "click",
            beat_jump: {
              "@deck_set": "Default",
              "@deck_id": 0,
              "@slot_id": 0,
              translation: {
                "@action_on": "press",
                "@behaviour": "static",
                "@static_value": "forward",
                "#text": null,
              },
            },
          },
          {
            "@event": "output",
            beat_jump: {
              "@deck_set": "Default",
              "@deck_id": 0,
              "@slot_id": 0,
              translation: {
                "@action_on": "any",
                alias: [
                  { "@name": "none", "@value": 0, "#text": null },
                  { "@name": "backward", "@value": 0, "#text": null },
                  { "@name": "forward", "@value": 127, "#text": null },
                ],
              },
            },
          },
        ],
      },
      {
        "@channel": 14,
        "@event_type": "Control Change",
        "@data_type": "Relative 2's Complement",
        "@control": 20,
        userio: {
          "@event": "click",
          midi_library_scroll: {
            "@deck_set": "Default",
            "@deck_id": 0,
            "@slot_id": 0,
            translation: {
              "@action_on": "any",
              "@behaviour": "explicit",
              "#text": null,
            },
          },
        },
      },
      {
        "@channel": 15,
        "@event_type": "Control Change",
        "@data_type": "Absolute 7",
        "@control": 6,
        case: [
          {
            condition: {
              effect_bank_mode: {
                "@deck_set": "DJ Effects",
                "@deck_id": 0,
                "@slot_id": 0,
                "@operator": "equal",
                "@cmp_value": "Multi Mode",
                "#text": null,
              },
            },
            userio: {
              "@event": "click",
              effect_level_1_slot_parameter_1: {
                "@deck_set": "DJ Effects",
                "@deck_id": 0,
                "@slot_id": 3,
                translation: {
                  "@action_on": "any",
                  "@behaviour": "explicit",
                  "#text": null,
                },
              },
            },
          },
          {
            condition: {
              effect_bank_mode: {
                "@deck_set": "DJ Effects",
                "@deck_id": 0,
                "@slot_id": 0,
                "@operator": "equal",
                "@cmp_value": "Single Mode",
                "#text": null,
              },
            },
            userio: {
              "@event": "click",
              effect_slot_parameter_3: {
                "@deck_set": "DJ Effects",
                "@deck_id": 0,
                "@slot_id": 0,
                translation: {
                  "@action_on": "any",
                  "@behaviour": "explicit",
                  "#text": null,
                },
              },
            },
          },
        ],
      },
      {
        "@channel": 15,
        "@event_type": "Control Change",
        "@data_type": "Absolute 7",
        "@control": 11,
        userio: {
          "@event": "click",
          effect_bank_beats_multiplier: {
            "@deck_set": "DJ Effects",
            "@deck_id": 1,
            "@slot_id": 0,
            translation: {
              "@action_on": "any",
              "@behaviour": "explicit",
              "#text": null,
            },
          },
        },
      },
      {
        "@channel": 14,
        "@event_type": "Note On",
        "@control": 43,
        userio: [
          {
            "@event": "click",
            sync_off: {
              "@deck_set": "Default",
              "@deck_id": 3,
              "@slot_id": 0,
              translation: {
                "@action_on": "any",
                "@behaviour": "explicit",
                "#text": null,
              },
            },
          },
          {
            "@event": "output",
            sync_off: {
              "@deck_set": "Default",
              "@deck_id": 3,
              "@slot_id": 0,
              translation: {
                "@action_on": "any",
                alias: [
                  { "@name": "on", "@value": 127, "#text": null },
                  { "@name": "off", "@value": 0, "#text": null },
                ],
              },
            },
          },
        ],
      },
      {
        "@channel": 14,
        "@event_type": "Note On",
        "@control": 60,
        userio: [
          {
            "@event": "click",
            cue: {
              "@deck_set": "Default",
              "@deck_id": 1,
              "@slot_id": 0,
              translation: {
                "@action_on": "any",
                "@behaviour": "explicit",
                "#text": null,
              },
            },
          },
          {
            "@event": "output",
            cue: {
              "@deck_set": "Default",
              "@deck_id": 1,
              "@slot_id": 0,
              translation: {
                "@action_on": "any",
                alias: [
                  { "@name": "on", "@value": 127, "#text": null },
                  { "@name": "off", "@value": 0, "#text": null },
                ],
              },
            },
          },
        ],
      },
      {
        "@channel": 15,
        "@event_type": "Control Change",
        "@data_type": "Absolute 7",
        "@control": 5,
        case: [
          {
            condition: {
              effect_bank_mode: {
                "@deck_set": "DJ Effects",
                "@deck_id": 0,
                "@slot_id": 0,
                "@operator": "equal",
                "@cmp_value": "Single Mode",
                "#text": null,
              },
            },
            userio: {
              "@event": "click",
              effect_slot_parameter_2: {
                "@deck_set": "DJ Effects",
                "@deck_id": 0,
                "@slot_id": 0,
                translation: {
                  "@action_on": "any",
                  "@behaviour": "explicit",
                  "#text": null,
                },
              },
            },
          },
          {
            condition: {
              effect_bank_mode: {
                "@deck_set": "DJ Effects",
                "@deck_id": 0,
                "@slot_id": 0,
                "@operator": "equal",
                "@cmp_value": "Multi Mode",
                "#text": null,
              },
            },
            userio: {
              "@event": "click",
              effect_level_1_slot_parameter_1: {
                "@deck_set": "DJ Effects",
                "@deck_id": 0,
                "@slot_id": 2,
                translation: {
                  "@action_on": "any",
                  "@behaviour": "explicit",
                  "#text": null,
                },
              },
            },
          },
        ],
      },
      {
        "@channel": 15,
        "@event_type": "Control Change",
        "@control": 16,
        userio: {
          "@event": "click",
          per_deck_pitch_slider_pickup_position: {
            "@deck_set": "Default",
            "@deck_id": 2,
            "@slot_id": 2,
            translation: {
              "@action_on": "any",
              "@behaviour": "explicit",
              "#text": null,
            },
          },
          pitch_slider: {
            "@deck_set": "Default",
            "@deck_id": 2,
            "@slot_id": 0,
            translation: {
              "@action_on": "any",
              "@behaviour": "explicit",
              "#text": null,
            },
          },
        },
      },
      {
        "@channel": 15,
        "@event_type": "Control Change",
        "@data_type": "Relative 2's Complement",
        "@control": 2,
        userio: {
          "@event": "click",
          loop_length_half_double: [
            {
              "@deck_set": "Default",
              "@deck_id": 0,
              "@slot_id": 0,
              translation: {
                "@action_on": "rotate_counterclockwise",
                "@behaviour": "static",
                "@static_value": "half",
                "#text": null,
              },
            },
            {
              "@deck_set": "Default",
              "@deck_id": 0,
              "@slot_id": 0,
              translation: {
                "@action_on": "rotate_clockwise",
                "@behaviour": "static",
                "@static_value": "double",
                "#text": null,
              },
            },
          ],
        },
      },
      {
        "@channel": 14,
        "@event_type": "Note On",
        "@control": 26,
        userio: [
          {
            "@event": "click",
            cue: {
              "@deck_set": "Default",
              "@deck_id": 3,
              "@slot_id": 0,
              translation: {
                "@action_on": "any",
                "@behaviour": "explicit",
                "#text": null,
              },
            },
          },
          {
            "@event": "output",
            cue: {
              "@deck_set": "Default",
              "@deck_id": 3,
              "@slot_id": 0,
              translation: {
                "@action_on": "any",
                alias: [
                  { "@name": "on", "@value": 127, "#text": null },
                  { "@name": "off", "@value": 0, "#text": null },
                ],
              },
            },
          },
        ],
      },
      {
        "@channel": 14,
        "@event_type": "Note On",
        "@control": 23,
        userio: [
          {
            "@event": "click",
            play: {
              "@deck_set": "Default",
              "@deck_id": 3,
              "@slot_id": 0,
              translation: {
                "@action_on": "press",
                "@behaviour": "toggle",
                "#text": null,
              },
            },
          },
          {
            "@event": "output",
            play: {
              "@deck_set": "Default",
              "@deck_id": 3,
              "@slot_id": 0,
              translation: {
                "@action_on": "any",
                alias: [
                  { "@name": "on", "@value": 127, "#text": null },
                  { "@name": "off", "@value": 0, "#text": null },
                ],
              },
            },
          },
        ],
      },
      {
        "@channel": 15,
        "@event_type": "Note On",
        "@control": 34,
        userio: [
          {
            "@event": "click",
            beat_jump: {
              "@deck_set": "Default",
              "@deck_id": 0,
              "@slot_id": 0,
              translation: {
                "@action_on": "press",
                "@behaviour": "static",
                "@static_value": "backward",
                "#text": null,
              },
            },
          },
          {
            "@event": "output",
            beat_jump: {
              "@deck_set": "Default",
              "@deck_id": 0,
              "@slot_id": 0,
              translation: {
                "@action_on": "any",
                alias: [
                  { "@name": "none", "@value": 0, "#text": null },
                  { "@name": "backward", "@value": 127, "#text": null },
                  { "@name": "forward", "@value": 0, "#text": null },
                ],
              },
            },
          },
        ],
      },
      {
        "@channel": 15,
        "@event_type": "Note On",
        "@control": 46,
        userio: [
          {
            "@event": "click",
            effect_bank_channel_assign: {
              "@deck_set": "DJ Effects",
              "@deck_id": 1,
              "@slot_id": 2,
              translation: {
                "@action_on": "press",
                "@behaviour": "multi_toggle",
                "#text": null,
              },
            },
          },
          {
            "@event": "output",
            effect_bank_channel_assign: {
              "@deck_set": "DJ Effects",
              "@deck_id": 1,
              "@slot_id": 2,
              translation: {
                "@action_on": "any",
                alias: [
                  { "@name": "on", "@value": 127, "#text": null },
                  { "@name": "off", "@value": 0, "#text": null },
                ],
              },
            },
          },
        ],
      },
      {
        "@channel": 14,
        "@event_type": "Note On",
        "@control": 62,
        userio: [
          {
            "@event": "click",
            cue: {
              "@deck_set": "Default",
              "@deck_id": 3,
              "@slot_id": 0,
              translation: {
                "@action_on": "any",
                "@behaviour": "explicit",
                "#text": null,
              },
            },
          },
          {
            "@event": "output",
            cue: {
              "@deck_set": "Default",
              "@deck_id": 3,
              "@slot_id": 0,
              translation: {
                "@action_on": "any",
                alias: [
                  { "@name": "on", "@value": 127, "#text": null },
                  { "@name": "off", "@value": 0, "#text": null },
                ],
              },
            },
          },
        ],
      },
      {
        "@channel": 14,
        "@event_type": "Note On",
        "@control": 52,
        userio: [
          {
            "@event": "click",
            auto_loop_enable: {
              "@deck_set": "Default",
              "@deck_id": 1,
              "@slot_id": 0,
              translation: {
                "@action_on": "press",
                "@behaviour": "toggle",
                "#text": null,
              },
            },
          },
          {
            "@event": "output",
            auto_loop_enable: {
              "@deck_set": "Default",
              "@deck_id": 1,
              "@slot_id": 0,
              translation: {
                "@action_on": "any",
                alias: [
                  { "@name": "on", "@value": 127, "#text": null },
                  { "@name": "off", "@value": 0, "#text": null },
                  { "@name": "trigger", "@value": 0, "#text": null },
                ],
              },
            },
          },
        ],
      },
      {
        "@channel": 14,
        "@event_type": "Note On",
        "@control": 41,
        userio: [
          {
            "@event": "click",
            sync_off: {
              "@deck_set": "Default",
              "@deck_id": 1,
              "@slot_id": 0,
              translation: {
                "@action_on": "any",
                "@behaviour": "explicit",
                "#text": null,
              },
            },
          },
          {
            "@event": "output",
            sync_off: {
              "@deck_set": "Default",
              "@deck_id": 1,
              "@slot_id": 0,
              translation: {
                "@action_on": "any",
                alias: [
                  { "@name": "on", "@value": 127, "#text": null },
                  { "@name": "off", "@value": 0, "#text": null },
                ],
              },
            },
          },
        ],
      },
      {
        "@channel": 14,
        "@event_type": "Note On",
        "@control": 20,
        userio: [
          {
            "@event": "click",
            play: {
              "@deck_set": "Default",
              "@deck_id": 1,
              "@slot_id": 0,
              translation: {
                "@action_on": "press",
                "@behaviour": "toggle",
                "#text": null,
              },
            },
          },
          {
            "@event": "output",
            play: {
              "@deck_set": "Default",
              "@deck_id": 1,
              "@slot_id": 0,
              translation: {
                "@action_on": "any",
                alias: [
                  { "@name": "on", "@value": 127, "#text": null },
                  { "@name": "off", "@value": 0, "#text": null },
                ],
              },
            },
          },
        ],
      },
      {
        "@channel": 15,
        "@event_type": "Control Change",
        "@data_type": "Relative 2's Complement",
        "@control": 3,
        userio: {
          "@event": "click",
          shift_loop: [
            {
              "@deck_set": "Default",
              "@deck_id": 0,
              "@slot_id": 1,
              translation: {
                "@action_on": "rotate_clockwise",
                "@behaviour": "static",
                "@static_value": "on",
                "#text": null,
              },
            },
            {
              "@deck_set": "Default",
              "@deck_id": 0,
              "@slot_id": 0,
              translation: {
                "@action_on": "rotate_counterclockwise",
                "@behaviour": "static",
                "@static_value": "on",
                "#text": null,
              },
            },
          ],
        },
      },
      {
        "@channel": 14,
        "@event_type": "Control Change",
        "@data_type": "Relative 2's Complement",
        "@control": 1,
        userio: {
          "@event": "click",
          shift_loop: [
            {
              "@deck_set": "Default",
              "@deck_id": 1,
              "@slot_id": 1,
              translation: {
                "@action_on": "rotate_clockwise",
                "@behaviour": "static",
                "@static_value": "on",
                "#text": null,
              },
            },
            {
              "@deck_set": "Default",
              "@deck_id": 1,
              "@slot_id": 0,
              translation: {
                "@action_on": "rotate_counterclockwise",
                "@behaviour": "static",
                "@static_value": "on",
                "#text": null,
              },
            },
          ],
        },
      },
      {
        "@channel": 14,
        "@event_type": "Note On",
        "@control": 13,
        userio: [
          {
            "@event": "click",
            load_track: {
              "@deck_set": "Default",
              "@deck_id": 1,
              "@slot_id": 0,
              translation: {
                "@action_on": "press",
                "@behaviour": "explicit",
                "#text": null,
              },
            },
          },
          {
            "@event": "output",
            load_track_feedback: {
              "@deck_set": "Default",
              "@deck_id": 1,
              "@slot_id": 0,
              translation: {
                "@action_on": "any",
                alias: [
                  { "@name": "off", "@value": 0, "#text": null },
                  { "@name": "on", "@value": 127, "#text": null },
                ],
              },
            },
          },
        ],
      },
      {
        "@channel": 15,
        "@event_type": "Note On",
        "@control": 60,
        userio: [
          {
            "@event": "click",
            cue: {
              "@deck_set": "Default",
              "@deck_id": 2,
              "@slot_id": 0,
              translation: {
                "@action_on": "any",
                "@behaviour": "explicit",
                "#text": null,
              },
            },
          },
          {
            "@event": "output",
            cue: {
              "@deck_set": "Default",
              "@deck_id": 2,
              "@slot_id": 0,
              translation: {
                "@action_on": "any",
                alias: [
                  { "@name": "on", "@value": 127, "#text": null },
                  { "@name": "off", "@value": 0, "#text": null },
                ],
              },
            },
          },
        ],
      },
      {
        "@channel": 15,
        "@event_type": "Control Change",
        "@data_type": "Absolute 7",
        "@control": 4,
        case: [
          {
            condition: {
              effect_bank_mode: {
                "@deck_set": "DJ Effects",
                "@deck_id": 0,
                "@slot_id": 0,
                "@operator": "equal",
                "@cmp_value": "Single Mode",
                "#text": null,
              },
            },
            userio: {
              "@event": "click",
              effect_slot_parameter_1: {
                "@deck_set": "DJ Effects",
                "@deck_id": 0,
                "@slot_id": 0,
                translation: {
                  "@action_on": "any",
                  "@behaviour": "explicit",
                  "#text": null,
                },
              },
            },
          },
          {
            condition: {
              effect_bank_mode: {
                "@deck_set": "DJ Effects",
                "@deck_id": 0,
                "@slot_id": 0,
                "@operator": "equal",
                "@cmp_value": "Multi Mode",
                "#text": null,
              },
            },
            userio: {
              "@event": "click",
              effect_level_1_slot_parameter_1: {
                "@deck_set": "DJ Effects",
                "@deck_id": 0,
                "@slot_id": 1,
                translation: {
                  "@action_on": "any",
                  "@behaviour": "explicit",
                  "#text": null,
                },
              },
            },
          },
        ],
      },
      {
        "@channel": 15,
        "@event_type": "Note On",
        "@control": 38,
        userio: [
          {
            "@event": "click",
            pitch_bend_down: {
              "@deck_set": "Default",
              "@deck_id": 0,
              "@slot_id": 0,
              translation: {
                "@action_on": "any",
                "@behaviour": "explicit",
                "#text": null,
              },
            },
          },
          {
            "@event": "output",
            pitch_bend_or_nudge_down: {
              "@deck_set": "Default",
              "@deck_id": 0,
              "@slot_id": 0,
              translation: {
                "@action_on": "any",
                alias: [
                  { "@name": "on", "@value": 127, "#text": null },
                  { "@name": "off", "@value": 0, "#text": null },
                ],
              },
            },
          },
        ],
      },
      {
        "@channel": 15,
        "@event_type": "Note On",
        "@control": 36,
        userio: [
          {
            "@event": "click",
            pitch_bend_down: {
              "@deck_set": "Default",
              "@deck_id": 2,
              "@slot_id": 0,
              translation: {
                "@action_on": "any",
                "@behaviour": "explicit",
                "#text": null,
              },
            },
          },
          {
            "@event": "output",
            pitch_bend_or_nudge_down: {
              "@deck_set": "Default",
              "@deck_id": 2,
              "@slot_id": 0,
              translation: {
                "@action_on": "any",
                alias: [
                  { "@name": "on", "@value": 127, "#text": null },
                  { "@name": "off", "@value": 0, "#text": null },
                ],
              },
            },
          },
        ],
      },
      {
        "@channel": 15,
        "@event_type": "Note On",
        "@control": 48,
        userio: [
          {
            "@event": "click",
            effect_bank_channel_assign: {
              "@deck_set": "DJ Effects",
              "@deck_id": 0,
              "@slot_id": 3,
              translation: {
                "@action_on": "press",
                "@behaviour": "multi_toggle",
                "#text": null,
              },
            },
          },
          {
            "@event": "output",
            effect_bank_channel_assign: {
              "@deck_set": "DJ Effects",
              "@deck_id": 0,
              "@slot_id": 3,
              translation: {
                "@action_on": "any",
                alias: [
                  { "@name": "on", "@value": 127, "#text": null },
                  { "@name": "off", "@value": 0, "#text": null },
                ],
              },
            },
          },
        ],
      },
      {
        "@channel": 15,
        "@event_type": "Note On",
        "@control": 25,
        userio: [
          {
            "@event": "click",
            beat_jump_step: {
              "@deck_set": "Default",
              "@deck_id": 2,
              "@slot_id": 9,
              translation: {
                "@action_on": "press",
                "@behaviour": "explicit",
                "#text": null,
              },
            },
          },
          {
            "@event": "output",
            beat_jump_step: {
              "@deck_set": "Default",
              "@deck_id": 2,
              "@slot_id": 9,
              translation: {
                "@action_on": "any",
                alias: [
                  { "@name": "on", "@value": 127, "#text": null },
                  { "@name": "off", "@value": 0, "#text": null },
                ],
              },
            },
          },
        ],
      },
      {
        "@channel": 15,
        "@event_type": "Note On",
        "@control": 29,
        userio: [
          {
            "@event": "click",
            beat_jump_step: {
              "@deck_set": "Default",
              "@deck_id": 2,
              "@slot_id": 7,
              translation: {
                "@action_on": "press",
                "@behaviour": "explicit",
                "#text": null,
              },
            },
          },
          {
            "@event": "output",
            beat_jump_step: {
              "@deck_set": "Default",
              "@deck_id": 2,
              "@slot_id": 7,
              translation: {
                "@action_on": "any",
                alias: [
                  { "@name": "on", "@value": 127, "#text": null },
                  { "@name": "off", "@value": 0, "#text": null },
                ],
              },
            },
          },
        ],
      },
      {
        "@channel": 15,
        "@event_type": "Note On",
        "@control": 50,
        userio: [
          {
            "@event": "click",
            effect_bank_channel_assign: {
              "@deck_set": "DJ Effects",
              "@deck_id": 0,
              "@slot_id": 2,
              translation: {
                "@action_on": "press",
                "@behaviour": "multi_toggle",
                "#text": null,
              },
            },
          },
          {
            "@event": "output",
            effect_bank_channel_assign: {
              "@deck_set": "DJ Effects",
              "@deck_id": 0,
              "@slot_id": 2,
              translation: {
                "@action_on": "any",
                alias: [
                  { "@name": "on", "@value": 127, "#text": null },
                  { "@name": "off", "@value": 0, "#text": null },
                ],
              },
            },
          },
        ],
      },
      {
        "@channel": 15,
        "@event_type": "Control Change",
        "@control": 17,
        userio: {
          "@event": "click",
          per_deck_pitch_slider_pickup_position: {
            "@deck_set": "Default",
            "@deck_id": 0,
            "@slot_id": 2,
            translation: {
              "@action_on": "any",
              "@behaviour": "explicit",
              "#text": null,
            },
          },
          pitch_slider: {
            "@deck_set": "Default",
            "@deck_id": 0,
            "@slot_id": 0,
            translation: {
              "@action_on": "any",
              "@behaviour": "explicit",
              "#text": null,
            },
          },
        },
      },
      {
        "@channel": 15,
        "@event_type": "Control Change",
        "@data_type": "Absolute 7",
        "@control": 8,
        case: [
          {
            condition: {
              effect_bank_mode: {
                "@deck_set": "DJ Effects",
                "@deck_id": 1,
                "@slot_id": 0,
                "@operator": "equal",
                "@cmp_value": "Single Mode",
                "#text": null,
              },
            },
            userio: {
              "@event": "click",
              effect_slot_parameter_1: {
                "@deck_set": "DJ Effects",
                "@deck_id": 1,
                "@slot_id": 0,
                translation: {
                  "@action_on": "any",
                  "@behaviour": "explicit",
                  "#text": null,
                },
              },
            },
          },
          {
            condition: {
              effect_bank_mode: {
                "@deck_set": "DJ Effects",
                "@deck_id": 1,
                "@slot_id": 0,
                "@operator": "equal",
                "@cmp_value": "Multi Mode",
                "#text": null,
              },
            },
            userio: {
              "@event": "click",
              effect_level_1_slot_parameter_1: {
                "@deck_set": "DJ Effects",
                "@deck_id": 1,
                "@slot_id": 1,
                translation: {
                  "@action_on": "any",
                  "@behaviour": "explicit",
                  "#text": null,
                },
              },
            },
          },
        ],
      },
      {
        "@channel": 14,
        "@event_type": "Note On",
        "@control": 15,
        userio: [
          {
            "@event": "click",
            play: {
              "@deck_set": "Default",
              "@deck_id": 3,
              "@slot_id": 0,
              translation: {
                "@action_on": "press",
                "@behaviour": "toggle",
                "#text": null,
              },
            },
          },
          {
            "@event": "output",
            play: {
              "@deck_set": "Default",
              "@deck_id": 3,
              "@slot_id": 0,
              translation: {
                "@action_on": "any",
                alias: [
                  { "@name": "on", "@value": 127, "#text": null },
                  { "@name": "off", "@value": 0, "#text": null },
                ],
              },
            },
          },
        ],
      },
      {
        "@channel": 15,
        "@event_type": "Note On",
        "@control": 32,
        userio: [
          {
            "@event": "click",
            beat_jump: {
              "@deck_set": "Default",
              "@deck_id": 2,
              "@slot_id": 0,
              translation: {
                "@action_on": "press",
                "@behaviour": "static",
                "@static_value": "backward",
                "#text": null,
              },
            },
          },
          {
            "@event": "output",
            beat_jump: {
              "@deck_set": "Default",
              "@deck_id": 2,
              "@slot_id": 0,
              translation: {
                "@action_on": "any",
                alias: [
                  { "@name": "none", "@value": 0, "#text": null },
                  { "@name": "backward", "@value": 127, "#text": null },
                  { "@name": "forward", "@value": 0, "#text": null },
                ],
              },
            },
          },
        ],
      },
      {
        "@channel": 14,
        "@event_type": "Note On",
        "@control": 24,
        userio: [
          {
            "@event": "click",
            cue: {
              "@deck_set": "Default",
              "@deck_id": 1,
              "@slot_id": 0,
              translation: {
                "@action_on": "any",
                "@behaviour": "explicit",
                "#text": null,
              },
            },
          },
          {
            "@event": "output",
            cue: {
              "@deck_set": "Default",
              "@deck_id": 1,
              "@slot_id": 0,
              translation: {
                "@action_on": "any",
                alias: [
                  { "@name": "on", "@value": 127, "#text": null },
                  { "@name": "off", "@value": 0, "#text": null },
                ],
              },
            },
          },
        ],
      },
      {
        "@channel": 15,
        "@event_type": "Control Change",
        "@control": 19,
        userio: {
          "@event": "click",
          per_deck_pitch_slider_pickup_position: {
            "@deck_set": "Default",
            "@deck_id": 3,
            "@slot_id": 2,
            translation: {
              "@action_on": "any",
              "@behaviour": "explicit",
              "#text": null,
            },
          },
          pitch_slider: {
            "@deck_set": "Default",
            "@deck_id": 3,
            "@slot_id": 0,
            translation: {
              "@action_on": "any",
              "@behaviour": "explicit",
              "#text": null,
            },
          },
        },
      },
      {
        "@channel": 14,
        "@event_type": "Note On",
        "@control": 35,
        userio: [
          {
            "@event": "click",
            beat_jump: {
              "@deck_set": "Default",
              "@deck_id": 3,
              "@slot_id": 0,
              translation: {
                "@action_on": "press",
                "@behaviour": "static",
                "@static_value": "forward",
                "#text": null,
              },
            },
          },
          {
            "@event": "output",
            beat_jump: {
              "@deck_set": "Default",
              "@deck_id": 3,
              "@slot_id": 0,
              translation: {
                "@action_on": "any",
                alias: [
                  { "@name": "none", "@value": 0, "#text": null },
                  { "@name": "backward", "@value": 0, "#text": null },
                  { "@name": "forward", "@value": 127, "#text": null },
                ],
              },
            },
          },
        ],
      },
      {
        "@channel": 15,
        "@event_type": "Note On",
        "@control": 20,
        userio: [
          {
            "@event": "click",
            play: {
              "@deck_set": "Default",
              "@deck_id": 2,
              "@slot_id": 0,
              translation: {
                "@action_on": "press",
                "@behaviour": "toggle",
                "#text": null,
              },
            },
          },
          {
            "@event": "output",
            play: {
              "@deck_set": "Default",
              "@deck_id": 2,
              "@slot_id": 0,
              translation: {
                "@action_on": "any",
                alias: [
                  { "@name": "on", "@value": 127, "#text": null },
                  { "@name": "off", "@value": 0, "#text": null },
                ],
              },
            },
          },
        ],
      },
      {
        "@channel": 15,
        "@event_type": "Note On",
        "@control": 31,
        userio: [
          {
            "@event": "click",
            beat_jump_step: {
              "@deck_set": "Default",
              "@deck_id": 0,
              "@slot_id": 7,
              translation: {
                "@action_on": "press",
                "@behaviour": "explicit",
                "#text": null,
              },
            },
          },
          {
            "@event": "output",
            beat_jump_step: {
              "@deck_set": "Default",
              "@deck_id": 0,
              "@slot_id": 7,
              translation: {
                "@action_on": "any",
                alias: [
                  { "@name": "on", "@value": 127, "#text": null },
                  { "@name": "off", "@value": 0, "#text": null },
                ],
              },
            },
          },
        ],
      },
      {
        "@channel": 14,
        "@event_type": "Note On",
        "@control": 34,
        userio: [
          {
            "@event": "click",
            beat_jump: {
              "@deck_set": "Default",
              "@deck_id": 3,
              "@slot_id": 0,
              translation: {
                "@action_on": "press",
                "@behaviour": "static",
                "@static_value": "backward",
                "#text": null,
              },
            },
          },
          {
            "@event": "output",
            beat_jump: {
              "@deck_set": "Default",
              "@deck_id": 3,
              "@slot_id": 0,
              translation: {
                "@action_on": "any",
                alias: [
                  { "@name": "none", "@value": 0, "#text": null },
                  { "@name": "backward", "@value": 127, "#text": null },
                  { "@name": "forward", "@value": 0, "#text": null },
                ],
              },
            },
          },
        ],
      },
      {
        "@channel": 15,
        "@event_type": "Note On",
        "@control": 23,
        userio: [
          {
            "@event": "click",
            play: {
              "@deck_set": "Default",
              "@deck_id": 0,
              "@slot_id": 0,
              translation: {
                "@action_on": "press",
                "@behaviour": "toggle",
                "#text": null,
              },
            },
          },
          {
            "@event": "output",
            play: {
              "@deck_set": "Default",
              "@deck_id": 0,
              "@slot_id": 0,
              translation: {
                "@action_on": "any",
                alias: [
                  { "@name": "on", "@value": 127, "#text": null },
                  { "@name": "off", "@value": 0, "#text": null },
                ],
              },
            },
          },
        ],
      },
      {
        "@channel": 14,
        "@event_type": "Note On",
        "@control": 31,
        userio: [
          {
            "@event": "click",
            beat_jump_step: {
              "@deck_set": "Default",
              "@deck_id": 3,
              "@slot_id": 7,
              translation: {
                "@action_on": "press",
                "@behaviour": "explicit",
                "#text": null,
              },
            },
          },
          {
            "@event": "output",
            beat_jump_step: {
              "@deck_set": "Default",
              "@deck_id": 3,
              "@slot_id": 7,
              translation: {
                "@action_on": "any",
                alias: [
                  { "@name": "on", "@value": 127, "#text": null },
                  { "@name": "off", "@value": 0, "#text": null },
                ],
              },
            },
          },
        ],
      },
      {
        "@channel": 14,
        "@event_type": "Control Change",
        "@data_type": "Relative 2's Complement",
        "@control": 2,
        userio: {
          "@event": "click",
          loop_length_half_double: [
            {
              "@deck_set": "Default",
              "@deck_id": 3,
              "@slot_id": 0,
              translation: {
                "@action_on": "rotate_counterclockwise",
                "@behaviour": "static",
                "@static_value": "half",
                "#text": null,
              },
            },
            {
              "@deck_set": "Default",
              "@deck_id": 3,
              "@slot_id": 0,
              translation: {
                "@action_on": "rotate_clockwise",
                "@behaviour": "static",
                "@static_value": "double",
                "#text": null,
              },
            },
          ],
        },
      },
      {
        "@channel": 15,
        "@event_type": "Note On",
        "@control": 47,
        userio: [
          {
            "@event": "click",
            effect_bank_channel_assign: {
              "@deck_set": "DJ Effects",
              "@deck_id": 1,
              "@slot_id": 4,
              translation: {
                "@action_on": "press",
                "@behaviour": "multi_toggle",
                "#text": null,
              },
            },
          },
          {
            "@event": "output",
            effect_bank_channel_assign: {
              "@deck_set": "DJ Effects",
              "@deck_id": 1,
              "@slot_id": 4,
              translation: {
                "@action_on": "any",
                alias: [
                  { "@name": "on", "@value": 127, "#text": null },
                  { "@name": "off", "@value": 0, "#text": null },
                ],
              },
            },
          },
        ],
      },
      {
        "@channel": 14,
        "@event_type": "Note On",
        "@control": 12,
        userio: [
          {
            "@event": "click",
            play: {
              "@deck_set": "Default",
              "@deck_id": 1,
              "@slot_id": 0,
              translation: {
                "@action_on": "press",
                "@behaviour": "toggle",
                "#text": null,
              },
            },
          },
          {
            "@event": "output",
            play: {
              "@deck_set": "Default",
              "@deck_id": 1,
              "@slot_id": 0,
              translation: {
                "@action_on": "any",
                alias: [
                  { "@name": "on", "@value": 127, "#text": null },
                  { "@name": "off", "@value": 0, "#text": null },
                ],
              },
            },
          },
        ],
      },
      {
        "@channel": 14,
        "@event_type": "Note On",
        "@control": 27,
        userio: [
          {
            "@event": "click",
            beat_jump_step: {
              "@deck_set": "Default",
              "@deck_id": 3,
              "@slot_id": 9,
              translation: {
                "@action_on": "press",
                "@behaviour": "explicit",
                "#text": null,
              },
            },
          },
          {
            "@event": "output",
            beat_jump_step: {
              "@deck_set": "Default",
              "@deck_id": 3,
              "@slot_id": 9,
              translation: {
                "@action_on": "any",
                alias: [
                  { "@name": "on", "@value": 127, "#text": null },
                  { "@name": "off", "@value": 0, "#text": null },
                ],
              },
            },
          },
        ],
      },
      {
        "@channel": 15,
        "@event_type": "Note On",
        "@control": 121,
        userio: [
          {
            "@event": "click",
            effect_bank_channel_assign: {
              "@deck_set": "DJ Effects",
              "@deck_id": 0,
              "@slot_id": 1,
              translation: {
                "@action_on": "press",
                "@behaviour": "multi_toggle",
                "#text": null,
              },
            },
          },
          {
            "@event": "output",
            effect_bank_channel_assign: {
              "@deck_set": "DJ Effects",
              "@deck_id": 0,
              "@slot_id": 1,
              translation: {
                "@action_on": "any",
                alias: [
                  { "@name": "on", "@value": 127, "#text": null },
                  { "@name": "off", "@value": 0, "#text": null },
                ],
              },
            },
          },
        ],
      },
      {
        "@channel": 15,
        "@event_type": "Note On",
        "@control": 44,
        userio: [
          {
            "@event": "click",
            effect_bank_channel_assign: {
              "@deck_set": "DJ Effects",
              "@deck_id": 1,
              "@slot_id": 3,
              translation: {
                "@action_on": "press",
                "@behaviour": "multi_toggle",
                "#text": null,
              },
            },
          },
          {
            "@event": "output",
            effect_bank_channel_assign: {
              "@deck_set": "DJ Effects",
              "@deck_id": 1,
              "@slot_id": 3,
              translation: {
                "@action_on": "any",
                alias: [
                  { "@name": "on", "@value": 127, "#text": null },
                  { "@name": "off", "@value": 0, "#text": null },
                ],
              },
            },
          },
        ],
      },
      {
        "@channel": 14,
        "@event_type": "Note On",
        "@control": 38,
        userio: [
          {
            "@event": "click",
            pitch_bend_down: {
              "@deck_set": "Default",
              "@deck_id": 3,
              "@slot_id": 0,
              translation: {
                "@action_on": "any",
                "@behaviour": "explicit",
                "#text": null,
              },
            },
          },
          {
            "@event": "output",
            pitch_bend_or_nudge_down: {
              "@deck_set": "Default",
              "@deck_id": 3,
              "@slot_id": 0,
              translation: {
                "@action_on": "any",
                alias: [
                  { "@name": "on", "@value": 127, "#text": null },
                  { "@name": "off", "@value": 0, "#text": null },
                ],
              },
            },
          },
        ],
      },
      {
        "@channel": 15,
        "@event_type": "Note On",
        "@control": 116,
        userio: [
          {
            "@event": "click",
            effect_bank_channel_assign: {
              "@deck_set": "DJ Effects",
              "@deck_id": 1,
              "@slot_id": 3,
              translation: {
                "@action_on": "press",
                "@behaviour": "multi_toggle",
                "#text": null,
              },
            },
          },
          {
            "@event": "output",
            effect_bank_channel_assign: {
              "@deck_set": "DJ Effects",
              "@deck_id": 1,
              "@slot_id": 3,
              translation: {
                "@action_on": "any",
                alias: [
                  { "@name": "on", "@value": 127, "#text": null },
                  { "@name": "off", "@value": 0, "#text": null },
                ],
              },
            },
          },
        ],
      },
      {
        "@channel": 15,
        "@event_type": "Control Change",
        "@data_type": "Relative 2's Complement",
        "@control": 0,
        userio: {
          "@event": "click",
          loop_length_half_double: [
            {
              "@deck_set": "Default",
              "@deck_id": 2,
              "@slot_id": 0,
              translation: {
                "@action_on": "rotate_counterclockwise",
                "@behaviour": "static",
                "@static_value": "half",
                "#text": null,
              },
            },
            {
              "@deck_set": "Default",
              "@deck_id": 2,
              "@slot_id": 0,
              translation: {
                "@action_on": "rotate_clockwise",
                "@behaviour": "static",
                "@static_value": "double",
                "#text": null,
              },
            },
          ],
        },
      },
      {
        "@channel": 15,
        "@event_type": "Note On",
        "@control": 26,
        userio: [
          {
            "@event": "click",
            cue: {
              "@deck_set": "Default",
              "@deck_id": 0,
              "@slot_id": 0,
              translation: {
                "@action_on": "any",
                "@behaviour": "explicit",
                "#text": null,
              },
            },
          },
          {
            "@event": "output",
            cue: {
              "@deck_set": "Default",
              "@deck_id": 0,
              "@slot_id": 0,
              translation: {
                "@action_on": "any",
                alias: [
                  { "@name": "on", "@value": 127, "#text": null },
                  { "@name": "off", "@value": 0, "#text": null },
                ],
              },
            },
          },
        ],
      },
      {
        "@channel": 15,
        "@event_type": "Control Change",
        "@data_type": "Relative 2's Complement",
        "@control": 21,
        userio: {
          "@event": "click",
          midi_library_scroll: {
            "@deck_set": "Default",
            "@deck_id": 0,
            "@slot_id": 0,
            translation: {
              "@action_on": "any",
              "@behaviour": "explicit",
              "#text": null,
            },
          },
        },
      },
      {
        "@channel": 15,
        "@event_type": "Note On",
        "@control": 120,
        userio: [
          {
            "@event": "click",
            effect_bank_channel_assign: {
              "@deck_set": "DJ Effects",
              "@deck_id": 0,
              "@slot_id": 3,
              translation: {
                "@action_on": "press",
                "@behaviour": "multi_toggle",
                "#text": null,
              },
            },
          },
          {
            "@event": "output",
            effect_bank_channel_assign: {
              "@deck_set": "DJ Effects",
              "@deck_id": 0,
              "@slot_id": 3,
              translation: {
                "@action_on": "any",
                alias: [
                  { "@name": "on", "@value": 127, "#text": null },
                  { "@name": "off", "@value": 0, "#text": null },
                ],
              },
            },
          },
        ],
      },
      {
        "@channel": 14,
        "@event_type": "Control Change",
        "@data_type": "Relative 2's Complement",
        "@control": 0,
        userio: {
          "@event": "click",
          loop_length_half_double: [
            {
              "@deck_set": "Default",
              "@deck_id": 1,
              "@slot_id": 0,
              translation: {
                "@action_on": "rotate_counterclockwise",
                "@behaviour": "static",
                "@static_value": "half",
                "#text": null,
              },
            },
            {
              "@deck_set": "Default",
              "@deck_id": 1,
              "@slot_id": 0,
              translation: {
                "@action_on": "rotate_clockwise",
                "@behaviour": "static",
                "@static_value": "double",
                "#text": null,
              },
            },
          ],
        },
      },
      {
        "@channel": 15,
        "@event_type": "Control Change",
        "@control": 9,
        case: [
          {
            condition: {
              effect_bank_mode: {
                "@deck_set": "DJ Effects",
                "@deck_id": 1,
                "@slot_id": 0,
                "@operator": "equal",
                "@cmp_value": "Single Mode",
                "#text": null,
              },
            },
            userio: {
              "@event": "click",
              effect_slot_parameter_2: {
                "@deck_set": "DJ Effects",
                "@deck_id": 1,
                "@slot_id": 0,
                translation: {
                  "@action_on": "any",
                  "@behaviour": "explicit",
                  "#text": null,
                },
              },
            },
          },
          {
            condition: {
              effect_bank_mode: {
                "@deck_set": "DJ Effects",
                "@deck_id": 1,
                "@slot_id": 0,
                "@operator": "equal",
                "@cmp_value": "Multi Mode",
                "#text": null,
              },
            },
            userio: {
              "@event": "click",
              effect_level_1_slot_parameter_1: {
                "@deck_set": "DJ Effects",
                "@deck_id": 1,
                "@slot_id": 2,
                translation: {
                  "@action_on": "any",
                  "@behaviour": "explicit",
                  "#text": null,
                },
              },
            },
          },
        ],
      },
      {
        "@channel": 15,
        "@event_type": "Note On",
        "@control": 51,
        userio: [
          {
            "@event": "click",
            effect_bank_channel_assign: {
              "@deck_set": "DJ Effects",
              "@deck_id": 0,
              "@slot_id": 4,
              translation: {
                "@action_on": "press",
                "@behaviour": "multi_toggle",
                "#text": null,
              },
            },
          },
          {
            "@event": "output",
            effect_bank_channel_assign: {
              "@deck_set": "DJ Effects",
              "@deck_id": 0,
              "@slot_id": 4,
              translation: {
                "@action_on": "any",
                alias: [
                  { "@name": "on", "@value": 127, "#text": null },
                  { "@name": "off", "@value": 0, "#text": null },
                ],
              },
            },
          },
        ],
      },
      {
        "@channel": 15,
        "@event_type": "Note On",
        "@control": 52,
        userio: [
          {
            "@event": "click",
            auto_loop_enable: {
              "@deck_set": "Default",
              "@deck_id": 2,
              "@slot_id": 0,
              translation: {
                "@action_on": "press",
                "@behaviour": "toggle",
                "#text": null,
              },
            },
          },
          {
            "@event": "output",
            auto_loop_enable: {
              "@deck_set": "Default",
              "@deck_id": 2,
              "@slot_id": 0,
              translation: {
                "@action_on": "any",
                alias: [
                  { "@name": "on", "@value": 127, "#text": null },
                  { "@name": "off", "@value": 0, "#text": null },
                  { "@name": "trigger", "@value": 0, "#text": null },
                ],
              },
            },
          },
        ],
      },
      {
        "@channel": 15,
        "@event_type": "Note On",
        "@control": 24,
        userio: [
          {
            "@event": "click",
            cue: {
              "@deck_set": "Default",
              "@deck_id": 2,
              "@slot_id": 0,
              translation: {
                "@action_on": "any",
                "@behaviour": "explicit",
                "#text": null,
              },
            },
          },
          {
            "@event": "output",
            cue: {
              "@deck_set": "Default",
              "@deck_id": 2,
              "@slot_id": 0,
              translation: {
                "@action_on": "any",
                alias: [
                  { "@name": "on", "@value": 127, "#text": null },
                  { "@name": "off", "@value": 0, "#text": null },
                ],
              },
            },
          },
        ],
      },
      {
        "@channel": 15,
        "@event_type": "Note On",
        "@control": 30,
        userio: [
          {
            "@event": "click",
            beat_jump_step: {
              "@deck_set": "Default",
              "@deck_id": 0,
              "@slot_id": 5,
              translation: {
                "@action_on": "press",
                "@behaviour": "explicit",
                "#text": null,
              },
            },
          },
          {
            "@event": "output",
            beat_jump_step: {
              "@deck_set": "Default",
              "@deck_id": 0,
              "@slot_id": 5,
              translation: {
                "@action_on": "any",
                alias: [
                  { "@name": "on", "@value": 127, "#text": null },
                  { "@name": "off", "@value": 0, "#text": null },
                ],
              },
            },
          },
        ],
      },
      {
        "@channel": 15,
        "@event_type": "Control Change",
        "@data_type": "Relative 2's Complement",
        "@control": 20,
        userio: {
          "@event": "click",
          midi_library_scroll: {
            "@deck_set": "Default",
            "@deck_id": 0,
            "@slot_id": 0,
            translation: {
              "@action_on": "any",
              "@behaviour": "explicit",
              "#text": null,
            },
          },
        },
      },
      {
        "@channel": 14,
        "@event_type": "Control Change",
        "@data_type": "Relative 2's Complement",
        "@control": 21,
        userio: {
          "@event": "click",
          midi_library_scroll: {
            "@deck_set": "Default",
            "@deck_id": 0,
            "@slot_id": 0,
            translation: {
              "@action_on": "any",
              "@behaviour": "explicit",
              "#text": null,
            },
          },
        },
      },
      {
        "@channel": 15,
        "@event_type": "Note On",
        "@control": 28,
        userio: [
          {
            "@event": "click",
            beat_jump_step: {
              "@deck_set": "Default",
              "@deck_id": 2,
              "@slot_id": 5,
              translation: {
                "@action_on": "press",
                "@behaviour": "explicit",
                "#text": null,
              },
            },
          },
          {
            "@event": "output",
            beat_jump_step: {
              "@deck_set": "Default",
              "@deck_id": 2,
              "@slot_id": 5,
              translation: {
                "@action_on": "any",
                alias: [
                  { "@name": "on", "@value": 127, "#text": null },
                  { "@name": "off", "@value": 0, "#text": null },
                ],
              },
            },
          },
        ],
      },
      {
        "@channel": 15,
        "@event_type": "Note On",
        "@control": 37,
        userio: [
          {
            "@event": "click",
            pitch_bend_up: {
              "@deck_set": "Default",
              "@deck_id": 2,
              "@slot_id": 0,
              translation: {
                "@action_on": "any",
                "@behaviour": "explicit",
                "#text": null,
              },
            },
          },
          {
            "@event": "output",
            pitch_bend_or_nudge_up: {
              "@deck_set": "Default",
              "@deck_id": 2,
              "@slot_id": 0,
              translation: {
                "@action_on": "any",
                alias: [
                  { "@name": "on", "@value": 127, "#text": null },
                  { "@name": "off", "@value": 0, "#text": null },
                ],
              },
            },
          },
        ],
      },
      {
        "@channel": 15,
        "@event_type": "Control Change",
        "@data_type": "Absolute 7",
        "@control": 7,
        userio: {
          "@event": "click",
          effect_bank_beats_multiplier: {
            "@deck_set": "DJ Effects",
            "@deck_id": 0,
            "@slot_id": 0,
            translation: {
              "@action_on": "any",
              "@behaviour": "explicit",
              "#text": null,
            },
          },
        },
      },
      {
        "@channel": 15,
        "@event_type": "Control Change",
        "@data_type": "Relative 2's Complement",
        "@control": 1,
        userio: {
          "@event": "click",
          shift_loop: [
            {
              "@deck_set": "Default",
              "@deck_id": 2,
              "@slot_id": 1,
              translation: {
                "@action_on": "rotate_clockwise",
                "@behaviour": "static",
                "@static_value": "on",
                "#text": null,
              },
            },
            {
              "@deck_set": "Default",
              "@deck_id": 2,
              "@slot_id": 0,
              translation: {
                "@action_on": "rotate_counterclockwise",
                "@behaviour": "static",
                "@static_value": "on",
                "#text": null,
              },
            },
          ],
        },
      },
      {
        "@channel": 15,
        "@event_type": "Note On",
        "@control": 33,
        userio: [
          {
            "@event": "click",
            beat_jump: {
              "@deck_set": "Default",
              "@deck_id": 2,
              "@slot_id": 0,
              translation: {
                "@action_on": "press",
                "@behaviour": "static",
                "@static_value": "forward",
                "#text": null,
              },
            },
          },
          {
            "@event": "output",
            beat_jump: {
              "@deck_set": "Default",
              "@deck_id": 2,
              "@slot_id": 0,
              translation: {
                "@action_on": "any",
                alias: [
                  { "@name": "none", "@value": 0, "#text": null },
                  { "@name": "backward", "@value": 0, "#text": null },
                  { "@name": "forward", "@value": 127, "#text": null },
                ],
              },
            },
          },
        ],
      },
      {
        "@channel": 14,
        "@event_type": "Note On",
        "@control": 42,
        userio: [
          {
            "@event": "click",
            sync: {
              "@deck_set": "Default",
              "@deck_id": 3,
              "@slot_id": 0,
              translation: {
                "@action_on": "any",
                "@behaviour": "explicit",
                "#text": null,
              },
            },
          },
          {
            "@event": "output",
            sync: {
              "@deck_set": "Default",
              "@deck_id": 3,
              "@slot_id": 0,
              translation: {
                "@action_on": "any",
                alias: [
                  { "@name": "on", "@value": 127, "#text": null },
                  { "@name": "off", "@value": 0, "#text": null },
                ],
              },
            },
          },
        ],
      },
      {
        "@channel": 15,
        "@event_type": "Note On",
        "@control": 42,
        userio: [
          {
            "@event": "click",
            sync: {
              "@deck_set": "Default",
              "@deck_id": 0,
              "@slot_id": 0,
              translation: {
                "@action_on": "any",
                "@behaviour": "explicit",
                "#text": null,
              },
            },
          },
          {
            "@event": "output",
            sync: {
              "@deck_set": "Default",
              "@deck_id": 0,
              "@slot_id": 0,
              translation: {
                "@action_on": "any",
                alias: [
                  { "@name": "on", "@value": 127, "#text": null },
                  { "@name": "off", "@value": 0, "#text": null },
                ],
              },
            },
          },
        ],
      },
      {
        "@channel": 15,
        "@event_type": "Note On",
        "@control": 45,
        userio: [
          {
            "@event": "click",
            effect_bank_channel_assign: {
              "@deck_set": "DJ Effects",
              "@deck_id": 1,
              "@slot_id": 1,
              translation: {
                "@action_on": "press",
                "@behaviour": "multi_toggle",
                "#text": null,
              },
            },
          },
          {
            "@event": "output",
            effect_bank_channel_assign: {
              "@deck_set": "DJ Effects",
              "@deck_id": 1,
              "@slot_id": 1,
              translation: {
                "@action_on": "any",
                alias: [
                  { "@name": "on", "@value": 127, "#text": null },
                  { "@name": "off", "@value": 0, "#text": null },
                ],
              },
            },
          },
        ],
      },
      {
        "@channel": 14,
        "@event_type": "Note On",
        "@control": 40,
        userio: [
          {
            "@event": "click",
            sync: {
              "@deck_set": "Default",
              "@deck_id": 1,
              "@slot_id": 0,
              translation: {
                "@action_on": "any",
                "@behaviour": "explicit",
                "#text": null,
              },
            },
          },
          {
            "@event": "output",
            sync: {
              "@deck_set": "Default",
              "@deck_id": 1,
              "@slot_id": 0,
              translation: {
                "@action_on": "any",
                alias: [
                  { "@name": "on", "@value": 127, "#text": null },
                  { "@name": "off", "@value": 0, "#text": null },
                ],
              },
            },
          },
        ],
      },
      {
        "@channel": 15,
        "@event_type": "Note On",
        "@control": 12,
        userio: [
          {
            "@event": "click",
            play: {
              "@deck_set": "Default",
              "@deck_id": 2,
              "@slot_id": 0,
              translation: {
                "@action_on": "press",
                "@behaviour": "toggle",
                "#text": null,
              },
            },
          },
          {
            "@event": "output",
            play: {
              "@deck_set": "Default",
              "@deck_id": 2,
              "@slot_id": 0,
              translation: {
                "@action_on": "any",
                alias: [
                  { "@name": "on", "@value": 127, "#text": null },
                  { "@name": "off", "@value": 0, "#text": null },
                ],
              },
            },
          },
        ],
      },
      {
        "@channel": 15,
        "@event_type": "Note On",
        "@control": 41,
        userio: [
          {
            "@event": "click",
            sync_off: {
              "@deck_set": "Default",
              "@deck_id": 2,
              "@slot_id": 0,
              translation: {
                "@action_on": "any",
                "@behaviour": "explicit",
                "#text": null,
              },
            },
          },
          {
            "@event": "output",
            sync_off: {
              "@deck_set": "Default",
              "@deck_id": 2,
              "@slot_id": 0,
              translation: {
                "@action_on": "any",
                alias: [
                  { "@name": "on", "@value": 127, "#text": null },
                  { "@name": "off", "@value": 0, "#text": null },
                ],
              },
            },
          },
        ],
      },
      {
        "@channel": 15,
        "@event_type": "Note On",
        "@control": 43,
        userio: [
          {
            "@event": "click",
            sync_off: {
              "@deck_set": "Default",
              "@deck_id": 0,
              "@slot_id": 0,
              translation: {
                "@action_on": "any",
                "@behaviour": "explicit",
                "#text": null,
              },
            },
          },
          {
            "@event": "output",
            sync_off: {
              "@deck_set": "Default",
              "@deck_id": 0,
              "@slot_id": 0,
              translation: {
                "@action_on": "any",
                alias: [
                  { "@name": "on", "@value": 127, "#text": null },
                  { "@name": "off", "@value": 0, "#text": null },
                ],
              },
            },
          },
        ],
      },
      {
        "@channel": 15,
        "@event_type": "Note On",
        "@control": 40,
        userio: [
          {
            "@event": "click",
            sync: {
              "@deck_set": "Default",
              "@deck_id": 2,
              "@slot_id": 0,
              translation: {
                "@action_on": "any",
                "@behaviour": "explicit",
                "#text": null,
              },
            },
          },
          {
            "@event": "output",
            sync: {
              "@deck_set": "Default",
              "@deck_id": 2,
              "@slot_id": 0,
              translation: {
                "@action_on": "any",
                alias: [
                  { "@name": "on", "@value": 127, "#text": null },
                  { "@name": "off", "@value": 0, "#text": null },
                ],
              },
            },
          },
        ],
      },
      {
        "@channel": 15,
        "@event_type": "Note On",
        "@control": 123,
        userio: [
          {
            "@event": "click",
            effect_bank_channel_assign: {
              "@deck_set": "DJ Effects",
              "@deck_id": 0,
              "@slot_id": 4,
              translation: {
                "@action_on": "press",
                "@behaviour": "multi_toggle",
                "#text": null,
              },
            },
          },
          {
            "@event": "output",
            effect_bank_channel_assign: {
              "@deck_set": "DJ Effects",
              "@deck_id": 0,
              "@slot_id": 4,
              translation: {
                "@action_on": "any",
                alias: [
                  { "@name": "on", "@value": 127, "#text": null },
                  { "@name": "off", "@value": 0, "#text": null },
                ],
              },
            },
          },
        ],
      },
      {
        "@channel": 15,
        "@event_type": "Note On",
        "@control": 119,
        userio: [
          {
            "@event": "click",
            effect_bank_channel_assign: {
              "@deck_set": "DJ Effects",
              "@deck_id": 1,
              "@slot_id": 4,
              translation: {
                "@action_on": "press",
                "@behaviour": "multi_toggle",
                "#text": null,
              },
            },
          },
          {
            "@event": "output",
            effect_bank_channel_assign: {
              "@deck_set": "DJ Effects",
              "@deck_id": 1,
              "@slot_id": 4,
              translation: {
                "@action_on": "any",
                alias: [
                  { "@name": "on", "@value": 127, "#text": null },
                  { "@name": "off", "@value": 0, "#text": null },
                ],
              },
            },
          },
        ],
      },
      {
        "@channel": 15,
        "@event_type": "Note On",
        "@control": 54,
        userio: [
          {
            "@event": "click",
            auto_loop_enable: {
              "@deck_set": "Default",
              "@deck_id": 0,
              "@slot_id": 0,
              translation: {
                "@action_on": "press",
                "@behaviour": "toggle",
                "#text": null,
              },
            },
          },
          {
            "@event": "output",
            auto_loop_enable: {
              "@deck_set": "Default",
              "@deck_id": 0,
              "@slot_id": 0,
              translation: {
                "@action_on": "any",
                alias: [
                  { "@name": "on", "@value": 127, "#text": null },
                  { "@name": "off", "@value": 0, "#text": null },
                  { "@name": "trigger", "@value": 0, "#text": null },
                ],
              },
            },
          },
        ],
      },
      {
        "@channel": 15,
        "@event_type": "Note On",
        "@control": 14,
        userio: [
          {
            "@event": "click",
            load_track: {
              "@deck_set": "Default",
              "@deck_id": 0,
              "@slot_id": 0,
              translation: {
                "@action_on": "press",
                "@behaviour": "explicit",
                "#text": null,
              },
            },
          },
          {
            "@event": "output",
            load_track_feedback: {
              "@deck_set": "Default",
              "@deck_id": 0,
              "@slot_id": 0,
              translation: {
                "@action_on": "any",
                alias: [
                  { "@name": "off", "@value": 0, "#text": null },
                  { "@name": "on", "@value": 127, "#text": null },
                ],
              },
            },
          },
        ],
      },
      {
        "@channel": 15,
        "@event_type": "Note On",
        "@control": 15,
        userio: [
          {
            "@event": "click",
            play: {
              "@deck_set": "Default",
              "@deck_id": 0,
              "@slot_id": 0,
              translation: {
                "@action_on": "press",
                "@behaviour": "toggle",
                "#text": null,
              },
            },
          },
          {
            "@event": "output",
            play: {
              "@deck_set": "Default",
              "@deck_id": 0,
              "@slot_id": 0,
              translation: {
                "@action_on": "any",
                alias: [
                  { "@name": "on", "@value": 127, "#text": null },
                  { "@name": "off", "@value": 0, "#text": null },
                ],
              },
            },
          },
        ],
      },
      {
        "@channel": 15,
        "@event_type": "Note On",
        "@control": 13,
        userio: [
          {
            "@event": "click",
            load_track: {
              "@deck_set": "Default",
              "@deck_id": 2,
              "@slot_id": 0,
              translation: {
                "@action_on": "press",
                "@behaviour": "explicit",
                "#text": null,
              },
            },
          },
          {
            "@event": "output",
            load_track_feedback: {
              "@deck_set": "Default",
              "@deck_id": 2,
              "@slot_id": 0,
              translation: {
                "@action_on": "any",
                alias: [
                  { "@name": "off", "@value": 0, "#text": null },
                  { "@name": "on", "@value": 127, "#text": null },
                ],
              },
            },
          },
        ],
      },
      {
        "@channel": 14,
        "@event_type": "Control Change",
        "@data_type": "Relative 2's Complement",
        "@control": 3,
        userio: {
          "@event": "click",
          shift_loop: [
            {
              "@deck_set": "Default",
              "@deck_id": 3,
              "@slot_id": 1,
              translation: {
                "@action_on": "rotate_clockwise",
                "@behaviour": "static",
                "@static_value": "on",
                "#text": null,
              },
            },
            {
              "@deck_set": "Default",
              "@deck_id": 3,
              "@slot_id": 0,
              translation: {
                "@action_on": "rotate_counterclockwise",
                "@behaviour": "static",
                "@static_value": "on",
                "#text": null,
              },
            },
          ],
        },
      },
      {
        "@channel": 14,
        "@event_type": "Note On",
        "@control": 54,
        userio: [
          {
            "@event": "click",
            auto_loop_enable: {
              "@deck_set": "Default",
              "@deck_id": 3,
              "@slot_id": 0,
              translation: {
                "@action_on": "press",
                "@behaviour": "toggle",
                "#text": null,
              },
            },
          },
          {
            "@event": "output",
            auto_loop_enable: {
              "@deck_set": "Default",
              "@deck_id": 3,
              "@slot_id": 0,
              translation: {
                "@action_on": "any",
                alias: [
                  { "@name": "on", "@value": 127, "#text": null },
                  { "@name": "off", "@value": 0, "#text": null },
                  { "@name": "trigger", "@value": 0, "#text": null },
                ],
              },
            },
          },
        ],
      },
      {
        "@channel": 15,
        "@event_type": "Note On",
        "@control": 39,
        userio: [
          {
            "@event": "click",
            pitch_bend_up: {
              "@deck_set": "Default",
              "@deck_id": 0,
              "@slot_id": 0,
              translation: {
                "@action_on": "any",
                "@behaviour": "explicit",
                "#text": null,
              },
            },
          },
          {
            "@event": "output",
            pitch_bend_or_nudge_up: {
              "@deck_set": "Default",
              "@deck_id": 0,
              "@slot_id": 0,
              translation: {
                "@action_on": "any",
                alias: [
                  { "@name": "on", "@value": 127, "#text": null },
                  { "@name": "off", "@value": 0, "#text": null },
                ],
              },
            },
          },
        ],
      },
      {
        "@channel": 15,
        "@event_type": "Note On",
        "@control": 27,
        userio: [
          {
            "@event": "click",
            beat_jump_step: {
              "@deck_set": "Default",
              "@deck_id": 0,
              "@slot_id": 9,
              translation: {
                "@action_on": "press",
                "@behaviour": "explicit",
                "#text": null,
              },
            },
          },
          {
            "@event": "output",
            beat_jump_step: {
              "@deck_set": "Default",
              "@deck_id": 0,
              "@slot_id": 9,
              translation: {
                "@action_on": "any",
                alias: [
                  { "@name": "on", "@value": 127, "#text": null },
                  { "@name": "off", "@value": 0, "#text": null },
                ],
              },
            },
          },
        ],
      },
      {
        "@channel": 14,
        "@event_type": "Note On",
        "@control": 37,
        userio: [
          {
            "@event": "click",
            pitch_bend_up: {
              "@deck_set": "Default",
              "@deck_id": 1,
              "@slot_id": 0,
              translation: {
                "@action_on": "any",
                "@behaviour": "explicit",
                "#text": null,
              },
            },
          },
          {
            "@event": "output",
            pitch_bend_or_nudge_up: {
              "@deck_set": "Default",
              "@deck_id": 1,
              "@slot_id": 0,
              translation: {
                "@action_on": "any",
                alias: [
                  { "@name": "on", "@value": 127, "#text": null },
                  { "@name": "off", "@value": 0, "#text": null },
                ],
              },
            },
          },
        ],
      },
      {
        "@channel": 15,
        "@event_type": "Note On",
        "@control": 122,
        userio: [
          {
            "@event": "click",
            effect_bank_channel_assign: {
              "@deck_set": "DJ Effects",
              "@deck_id": 0,
              "@slot_id": 2,
              translation: {
                "@action_on": "press",
                "@behaviour": "multi_toggle",
                "#text": null,
              },
            },
          },
          {
            "@event": "output",
            effect_bank_channel_assign: {
              "@deck_set": "DJ Effects",
              "@deck_id": 0,
              "@slot_id": 2,
              translation: {
                "@action_on": "any",
                alias: [
                  { "@name": "on", "@value": 127, "#text": null },
                  { "@name": "off", "@value": 0, "#text": null },
                ],
              },
            },
          },
        ],
      },
      {
        "@channel": 14,
        "@event_type": "Note On",
        "@control": 39,
        userio: [
          {
            "@event": "click",
            pitch_bend_up: {
              "@deck_set": "Default",
              "@deck_id": 3,
              "@slot_id": 0,
              translation: {
                "@action_on": "any",
                "@behaviour": "explicit",
                "#text": null,
              },
            },
          },
          {
            "@event": "output",
            pitch_bend_or_nudge_up: {
              "@deck_set": "Default",
              "@deck_id": 3,
              "@slot_id": 0,
              translation: {
                "@action_on": "any",
                alias: [
                  { "@name": "on", "@value": 127, "#text": null },
                  { "@name": "off", "@value": 0, "#text": null },
                ],
              },
            },
          },
        ],
      },
      {
        "@channel": 14,
        "@event_type": "Note On",
        "@control": 36,
        userio: [
          {
            "@event": "click",
            pitch_bend_down: {
              "@deck_set": "Default",
              "@deck_id": 1,
              "@slot_id": 0,
              translation: {
                "@action_on": "any",
                "@behaviour": "explicit",
                "#text": null,
              },
            },
          },
          {
            "@event": "output",
            pitch_bend_or_nudge_down: {
              "@deck_set": "Default",
              "@deck_id": 1,
              "@slot_id": 0,
              translation: {
                "@action_on": "any",
                alias: [
                  { "@name": "on", "@value": 127, "#text": null },
                  { "@name": "off", "@value": 0, "#text": null },
                ],
              },
            },
          },
        ],
      },
      {
        "@channel": 14,
        "@event_type": "Note On",
        "@control": 33,
        userio: [
          {
            "@event": "click",
            beat_jump: {
              "@deck_set": "Default",
              "@deck_id": 1,
              "@slot_id": 0,
              translation: {
                "@action_on": "press",
                "@behaviour": "static",
                "@static_value": "forward",
                "#text": null,
              },
            },
          },
          {
            "@event": "output",
            beat_jump: {
              "@deck_set": "Default",
              "@deck_id": 1,
              "@slot_id": 0,
              translation: {
                "@action_on": "any",
                alias: [
                  { "@name": "none", "@value": 0, "#text": null },
                  { "@name": "backward", "@value": 0, "#text": null },
                  { "@name": "forward", "@value": 127, "#text": null },
                ],
              },
            },
          },
        ],
      },
      {
        "@channel": 14,
        "@event_type": "Note On",
        "@control": 32,
        userio: [
          {
            "@event": "click",
            beat_jump: {
              "@deck_set": "Default",
              "@deck_id": 1,
              "@slot_id": 0,
              translation: {
                "@action_on": "press",
                "@behaviour": "static",
                "@static_value": "backward",
                "#text": null,
              },
            },
          },
          {
            "@event": "output",
            beat_jump: {
              "@deck_set": "Default",
              "@deck_id": 1,
              "@slot_id": 0,
              translation: {
                "@action_on": "any",
                alias: [
                  { "@name": "none", "@value": 0, "#text": null },
                  { "@name": "backward", "@value": 127, "#text": null },
                  { "@name": "forward", "@value": 0, "#text": null },
                ],
              },
            },
          },
        ],
      },
      {
        "@channel": 15,
        "@event_type": "Note On",
        "@control": 118,
        userio: [
          {
            "@event": "click",
            effect_bank_channel_assign: {
              "@deck_set": "DJ Effects",
              "@deck_id": 1,
              "@slot_id": 2,
              translation: {
                "@action_on": "press",
                "@behaviour": "multi_toggle",
                "#text": null,
              },
            },
          },
          {
            "@event": "output",
            effect_bank_channel_assign: {
              "@deck_set": "DJ Effects",
              "@deck_id": 1,
              "@slot_id": 2,
              translation: {
                "@action_on": "any",
                alias: [
                  { "@name": "on", "@value": 127, "#text": null },
                  { "@name": "off", "@value": 0, "#text": null },
                ],
              },
            },
          },
        ],
      },
      {
        "@channel": 14,
        "@event_type": "Note On",
        "@control": 30,
        userio: [
          {
            "@event": "click",
            beat_jump_step: {
              "@deck_set": "Default",
              "@deck_id": 3,
              "@slot_id": 5,
              translation: {
                "@action_on": "press",
                "@behaviour": "explicit",
                "#text": null,
              },
            },
          },
          {
            "@event": "output",
            beat_jump_step: {
              "@deck_set": "Default",
              "@deck_id": 3,
              "@slot_id": 5,
              translation: {
                "@action_on": "any",
                alias: [
                  { "@name": "on", "@value": 127, "#text": null },
                  { "@name": "off", "@value": 0, "#text": null },
                ],
              },
            },
          },
        ],
      },
      {
        "@channel": 14,
        "@event_type": "Note On",
        "@control": 28,
        userio: [
          {
            "@event": "click",
            beat_jump_step: {
              "@deck_set": "Default",
              "@deck_id": 1,
              "@slot_id": 5,
              translation: {
                "@action_on": "press",
                "@behaviour": "explicit",
                "#text": null,
              },
            },
          },
          {
            "@event": "output",
            beat_jump_step: {
              "@deck_set": "Default",
              "@deck_id": 1,
              "@slot_id": 5,
              translation: {
                "@action_on": "any",
                alias: [
                  { "@name": "on", "@value": 127, "#text": null },
                  { "@name": "off", "@value": 0, "#text": null },
                ],
              },
            },
          },
        ],
      },
      {
        "@channel": 14,
        "@event_type": "Note On",
        "@control": 25,
        userio: [
          {
            "@event": "click",
            beat_jump_step: {
              "@deck_set": "Default",
              "@deck_id": 1,
              "@slot_id": 9,
              translation: {
                "@action_on": "press",
                "@behaviour": "explicit",
                "#text": null,
              },
            },
          },
          {
            "@event": "output",
            beat_jump_step: {
              "@deck_set": "Default",
              "@deck_id": 1,
              "@slot_id": 9,
              translation: {
                "@action_on": "any",
                alias: [
                  { "@name": "on", "@value": 127, "#text": null },
                  { "@name": "off", "@value": 0, "#text": null },
                ],
              },
            },
          },
        ],
      },
      {
        "@channel": 15,
        "@event_type": "Note On",
        "@control": 49,
        userio: [
          {
            "@event": "click",
            effect_bank_channel_assign: {
              "@deck_set": "DJ Effects",
              "@deck_id": 0,
              "@slot_id": 1,
              translation: {
                "@action_on": "press",
                "@behaviour": "multi_toggle",
                "#text": null,
              },
            },
          },
          {
            "@event": "output",
            effect_bank_channel_assign: {
              "@deck_set": "DJ Effects",
              "@deck_id": 0,
              "@slot_id": 1,
              translation: {
                "@action_on": "any",
                alias: [
                  { "@name": "on", "@value": 127, "#text": null },
                  { "@name": "off", "@value": 0, "#text": null },
                ],
              },
            },
          },
        ],
      },
      {
        "@channel": 15,
        "@event_type": "Note On",
        "@control": 117,
        userio: [
          {
            "@event": "click",
            effect_bank_channel_assign: {
              "@deck_set": "DJ Effects",
              "@deck_id": 1,
              "@slot_id": 1,
              translation: {
                "@action_on": "press",
                "@behaviour": "multi_toggle",
                "#text": null,
              },
            },
          },
          {
            "@event": "output",
            effect_bank_channel_assign: {
              "@deck_set": "DJ Effects",
              "@deck_id": 1,
              "@slot_id": 1,
              translation: {
                "@action_on": "any",
                alias: [
                  { "@name": "on", "@value": 127, "#text": null },
                  { "@name": "off", "@value": 0, "#text": null },
                ],
              },
            },
          },
        ],
      },
    ],
  },
};
