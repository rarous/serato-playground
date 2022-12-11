import { defAtom } from "@thi.ng/atom";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { choose } from "lit/directives/choose.js";
import { when } from "lit/directives/when.js";
import { data } from "./mapping.js";
import { initRenderLoop } from "./renderer.js";
import {
  greenBtns,
  greenCCs,
  orangeBtns,
  orangeCCs,
  redBtns,
  redCCs,
  surface,
} from "./xone-k2.js";

const state = defAtom({
  view: template,
  midi: null,
  selected: { control: null, channel: null, note: null },
});

function selectNote(channel, note) {
  console.log({ event: "select", note, channel });
  state.resetIn("selected", { note, channel });
  return false;
}

function selectCC(channel, control) {
  console.log({ event: "select", control, channel });
  state.resetIn("selected", { control, channel });
  return false;
}

function normalizeArray(x) {
  if (!x) return [];
  if (Array.isArray(x)) return x;
  return [x];
}

function alias(alias) {
  return html`
    <span
      >{${alias.map((x) => `${x["@name"]}: ${x["@value"]}`).join(", ")}}</span
    >
  `;
}

function translation(translation) {
  const { ["@action_on"]: action, ...rest } = translation;
  const keys = Object.keys(rest);
  return html`
    <span>${action}</span>
    ${keys.map((key) =>
      choose(key, [
        ["alias", () => alias(translation.alias)],
        [
          "@static_value",
          () => html`<span>${translation["@static_value"]}</span>`,
        ],
      ])
    )}
  `;
}

function details(values) {
  return html`
    <ul>
      ${values.map(
        (details) => html`
          <li>
            ${details["@deck_set"]}
            <code
              >{deck: ${details["@deck_id"]}, slot: ${details["@slot_id"]}}
              ${when(
                details.translation,
                () => html`-> ${translation(details.translation)}`
              )}</code
            >
          </li>
        `
      )}
    </ul>
  `;
}

function outputColor({ control, note }) {
  const isRed = control ? redCCs.has(control) : redBtns.has(note);
  const isOrange = control ? orangeCCs.has(control) : orangeBtns.has(note);
  const isGreen = control ? greenCCs.has(control) : greenBtns.has(note);

  return html`
    <i
      class="${classMap({
        color: true,
        "color--red": isRed,
        "color--orange": isOrange,
        "color--green": isGreen,
      })}"
    ></i>
  `;
}

function action([key, value]) {
  return html` <div>${key} ${details(normalizeArray(value))}</div> `;
}

function userio(x, signal) {
  const { ["@event"]: event, ...rest } = x;
  const actions = Object.entries(rest);
  const classInfo = {
    "user-io": true,
    "user-io--click": event === "click",
    "user-io--output": event === "output",
  };
  return html`
    <div class="${classMap(classInfo)}">
      <svg><use href="#${event}"></svg>
        ${outputColor(signal)}
      ${actions.map((x) => action(x))}
    </div>
  `;
}

function conditional(option, signal) {
  const actions = Object.entries(option.condition);
  return html`
    <li>
      ${actions.map(
        ([key, value]) => html`
          <span>${value["@deck_set"]}</span>
          <code>{deck: ${value["@deck_id"]}, slot: ${value["@slot_id"]}} </code>
          <code
            >${key} ${value["@operator"]} <b>${value["@cmp_value"]}</b></code
          >
        `
      )}
      ${normalizeArray(option.userio)
        .filter(Boolean)
        .map((x) => html`${userio(x, signal)}`)}
    </li>
  `;
}

function controlDetail(control) {
  const {
    ["@channel"]: ch,
    ["@control"]: ctrl,
    ["@event_type"]: event,
  } = control;
  const isCC = event === "Control Change";
  const isNote = event === "Note On";
  const key = isCC ? "control" : "note";
  const signal = { [key]: ctrl };
  return html`
    <div
      id="ctrl-${ch}-${ctrl}${isCC ? "-cc" : ""}"
      class="control-detail"
      @click="${(e) => (isNote ? selectNote(ch, ctrl) : selectCC(ch, ctrl))}"
    >
      <div>${ch}</div>
      <div>${event}</div>
      <div>
        ${ctrl}
        ${when(
          control["@data_type"],
          () => html`<i>${control["@data_type"]}</i>`
        )}
      </div>
      ${normalizeArray(control.userio)
        .filter(Boolean)
        .map((x) => userio(x, signal))}
      ${when(
        control.case,
        () => html`
          <ol>
            ${control.case.filter(Boolean).map((x) => conditional(x, signal))}
          </ol>
        `
      )}
    </div>
  `;
}

function template({ midi, selected }) {
  return html`
    <div class="canvas">
      <div class="mapping">
        <h1>My Serato DJ Mapping for two Xone:K2</h1>
        ${midi.control.map((control) => controlDetail(control))}
      </div>
      <figure>
        ${surface({ channel: 15, selected })}
        <figcaption>left</figcaption>
      </figure>
      <figure>
        ${surface({ channel: 14, selected })}
        <figcaption>right</figcaption>
      </figure>
    </div>
  `;
}

/**
 *
 * @param {HTMLElement} appRoot
 * @return {Promise<void>}
 */
export async function main({ appRoot }) {
  initRenderLoop(state, appRoot);
  state.resetIn("midi", data.midi);
}
