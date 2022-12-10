import { defAtom } from "@thi.ng/atom";
import { render, html, svg } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { when } from "lit/directives/when.js";
import { data } from "./mapping.js";
import { initRenderLoop } from "./renderer.js";

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
  if (!userio) return [];
  if (Array.isArray(x)) return x;
  return [x];
}

function details(values) {
  return html`
    <ul>
      ${values.map(
        (details) => html`
          <li>
            ${details["@deck_set"]} (deck: ${details["@deck_id"]}, slot:
            ${details["@slot_id"]})
          </li>
        `
      )}
    </ul>
  `;
}

function action([key, value]) {
  return html`<div>${key}${details(normalizeArray(value))}</div>`;
}

function userio(x) {
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
      ${actions.map((x) => action(x))}
    </div>
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
        .map((x) => userio(x))}
    </div>
  `;
}

const redBtns = new Set([
  12, 13, 14, 15, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
  39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55,
]);
const orangeBtns = new Set([
  16, 17, 18, 19, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74,
  75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91,
]);
const greenBtns = new Set([
  20, 21, 22, 23, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108,
  109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123,
  124, 125, 126, 127,
]);
const redCCs = new Set([
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
]);
const orangeCCs = new Set([
  22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  41, 42, 43,
]);

const greenCCs = new Set([
  44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62,
  63, 68, 69,
]);

function surface({ channel, selected }) {
  function btnStyles(xs) {
    const mappings = new Set(xs);
    const isSelected =
      channel == selected?.channel && mappings.has(selected?.note);
    return {
      btn: true,
      "btn--green": isSelected && greenBtns.has(selected?.note),
      "btn--orange": isSelected && orangeBtns.has(selected?.note),
      "btn--red": isSelected && redBtns.has(selected?.note),
    };
  }
  function knobStyles(xs) {
    const mappings = new Set(xs);
    const isSelected =
      channel == selected?.channel && mappings.has(selected?.control);
    return {
      cc: true,
      "cc--red": isSelected && redCCs.has(selected?.control),
      "cc--orange": isSelected && orangeCCs.has(selected?.control),
      "cc--green": isSelected && greenCCs.has(selected?.control),
    };
  }
  return svg`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.92 1468.5">
          <style>
              .btn, .cc {
                fill: var(--grey);
                fill-rule: evenodd;
              }
              .btn.btn--green,
              .cc.cc--green {
                fill: var(--green);
              }
              .btn.btn--orange,
              .cc.cc--orange {
                fill: var(--orange);
              }
              .btn.btn--red,
              .cc.cc--red {
                fill: var(--red);
              }
          </style>
          <defs>
              <clipPath id="a" clipPathUnits="userSpaceOnUse">
                  <path d="M424.4 1057.24h110.849v18.401H424.4Z"></path>
              </clipPath>
              <clipPath id="b" clipPathUnits="userSpaceOnUse">
                  <path d="M0 1190.64h841.92V0H0Z"></path>
              </clipPath>
          </defs>
          <image
                  href="data:image/png;base64,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"
                  width="1" height="1" image-rendering="optimizeSpeed" preserveAspectRatio="none"
                  transform="matrix(145.06666 0 0 46.79999 304.066 143.6)"></image>
          <g clip-path="url(#a)" transform="matrix(1.33333 0 0 -1.33333 0 1587.52)">
              <image
                      href="data:image/png;base64,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"
                      width="1" height="1" image-rendering="optimizeSpeed" preserveAspectRatio="none"
                      transform="matrix(110.85001 0 0 -18.4 424.4 1075.64)"></image>
          </g>
          <g clip-path="url(#b)" transform="matrix(1.33333 0 0 -1.33333 0 1587.52)">
              <path fill="none" stroke="#000" stroke-linejoin="round" stroke-miterlimit="10"
                    d="M202.7 1043.03c0 26.07 21.14 47.21 47.21 47.21h274.08c26.07 0 47.21-21.14 47.21-47.21V136.85c0-26.07-21.14-47.21-47.21-47.21H249.91c-26.07 0-47.21 21.14-47.21 47.21z"></path>
              <path class="${classMap(
                Object.assign(btnStyles([52, 88, 124]), knobStyles([0, 22, 44]))
              )}"
                    d="M241.95 1011.71c0 10.18 8.25 18.43 18.42 18.43 10.18 0 18.43-8.25 18.43-18.43 0-10.17-8.25-18.42-18.43-18.42-10.17 0-18.42 8.25-18.42 18.42"></path>
              <path fill="none" stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".5"
                    d="M241.95 1011.71c0 10.18 8.25 18.43 18.42 18.43 10.18 0 18.43-8.25 18.43-18.43 0-10.17-8.25-18.42-18.43-18.42-10.17 0-18.42 8.25-18.42 18.42Z"></path>
              <path class="${classMap(
                Object.assign(btnStyles([53, 89, 125]), knobStyles([1, 23, 45]))
              )}"
                    d="M325.3 1011.71c0 10.18 8.25 18.43 18.43 18.43 10.17 0 18.42-8.25 18.42-18.43 0-10.17-8.25-18.42-18.42-18.42-10.18 0-18.43 8.25-18.43 18.42"></path>
              <path fill="none" stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".5"
                    d="M325.3 1011.71c0 10.18 8.25 18.43 18.43 18.43 10.17 0 18.42-8.25 18.42-18.43 0-10.17-8.25-18.42-18.42-18.42-10.18 0-18.43 8.25-18.43 18.42Z"></path>
              <path class="${classMap(
                Object.assign(btnStyles([54, 90, 126]), knobStyles([2, 24, 46]))
              )}"
                    d="M410.6 1011.71c0 10.18 8.25 18.43 18.43 18.43 10.17 0 18.42-8.25 18.42-18.43 0-10.17-8.25-18.42-18.42-18.42-10.18 0-18.43 8.25-18.43 18.42"></path>
              <path fill="none" stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".5"
                    d="M410.6 1011.71c0 10.18 8.25 18.43 18.43 18.43 10.17 0 18.42-8.25 18.42-18.43 0-10.17-8.25-18.42-18.42-18.42-10.18 0-18.43 8.25-18.43 18.42Z"></path>
              <path class="${classMap(
                Object.assign(btnStyles([55, 91, 127]), knobStyles([3, 25, 47]))
              )}"
                    d="M495.85 1011.71c0 10.18 8.25 18.43 18.43 18.43 10.17 0 18.42-8.25 18.42-18.43 0-10.17-8.25-18.42-18.42-18.42-10.18 0-18.43 8.25-18.43 18.42"></path>
              <path fill="none" stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".5"
                    d="M495.85 1011.71c0 10.18 8.25 18.43 18.43 18.43 10.17 0 18.42-8.25 18.42-18.43 0-10.17-8.25-18.42-18.42-18.42-10.18 0-18.43 8.25-18.43 18.42Z"></path>
              <path class="${classMap(knobStyles([4, 26, 48]))}"
                    d="M241.95 932.16c0 10.18 8.25 18.43 18.42 18.43 10.18 0 18.43-8.25 18.43-18.43 0-10.17-8.25-18.42-18.43-18.42-10.17 0-18.42 8.25-18.42 18.42"></path>
              <path fill="none" stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".5"
                    d="M241.95 932.16c0 10.18 8.25 18.43 18.42 18.43 10.18 0 18.43-8.25 18.43-18.43 0-10.17-8.25-18.42-18.43-18.42-10.17 0-18.42 8.25-18.42 18.42Z"></path>
              <path class="${classMap(knobStyles([5, 27, 49]))}"
                    d="M325.3 932.16c0 10.18 8.25 18.43 18.43 18.43 10.17 0 18.42-8.25 18.42-18.43 0-10.17-8.25-18.42-18.42-18.42-10.18 0-18.43 8.25-18.43 18.42"></path>
              <path fill="none" stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".5"
                    d="M325.3 932.16c0 10.18 8.25 18.43 18.43 18.43 10.17 0 18.42-8.25 18.42-18.43 0-10.17-8.25-18.42-18.42-18.42-10.18 0-18.43 8.25-18.43 18.42Z"></path>
              <path class="${classMap(knobStyles([6, 28, 50]))}"
                    d="M410.6 932.16c0 10.18 8.25 18.43 18.43 18.43 10.17 0 18.42-8.25 18.42-18.43 0-10.17-8.25-18.42-18.42-18.42-10.18 0-18.43 8.25-18.43 18.42"></path>
              <path fill="none" stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".5"
                    d="M410.6 932.16c0 10.18 8.25 18.43 18.43 18.43 10.17 0 18.42-8.25 18.42-18.43 0-10.17-8.25-18.42-18.42-18.42-10.18 0-18.43 8.25-18.43 18.42Z"></path>
              <path class="${classMap(knobStyles([7, 29, 51]))}"
                    d="M495.85 932.16c0 10.18 8.25 18.43 18.43 18.43 10.17 0 18.42-8.25 18.42-18.43 0-10.17-8.25-18.42-18.42-18.42-10.18 0-18.43 8.25-18.43 18.42"></path>
              <path fill="none" stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".5"
                    d="M495.85 932.16c0 10.18 8.25 18.43 18.43 18.43 10.17 0 18.42-8.25 18.42-18.43 0-10.17-8.25-18.42-18.42-18.42-10.18 0-18.43 8.25-18.43 18.42Z"></path>
              <path class="${classMap(knobStyles([8, 30, 52]))}"
                    d="M241.95 822.27c0 10.17 8.25 18.42 18.42 18.42 10.18 0 18.43-8.25 18.43-18.42 0-10.18-8.25-18.43-18.43-18.43-10.17 0-18.42 8.25-18.42 18.43"></path>
              <path fill="none" stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".5"
                    d="M241.95 822.27c0 10.17 8.25 18.42 18.42 18.42 10.18 0 18.43-8.25 18.43-18.42 0-10.18-8.25-18.43-18.43-18.43-10.17 0-18.42 8.25-18.42 18.43Z"></path>
              <path class="${classMap(knobStyles([9, 31, 53]))}"
                    d="M325.3 822.27c0 10.17 8.25 18.42 18.43 18.42 10.17 0 18.42-8.25 18.42-18.42 0-10.18-8.25-18.43-18.42-18.43-10.18 0-18.43 8.25-18.43 18.43"></path>
              <path fill="none" stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".5"
                    d="M325.3 822.27c0 10.17 8.25 18.42 18.43 18.42 10.17 0 18.42-8.25 18.42-18.42 0-10.18-8.25-18.43-18.42-18.43-10.18 0-18.43 8.25-18.43 18.43Z"></path>
              <path class="${classMap(knobStyles([10, 32, 54]))}"
                    d="M410.6 822.27c0 10.17 8.25 18.42 18.43 18.42 10.17 0 18.42-8.25 18.42-18.42 0-10.18-8.25-18.43-18.42-18.43-10.18 0-18.43 8.25-18.43 18.43"></path>
              <path fill="none" stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".5"
                    d="M410.6 822.27c0 10.17 8.25 18.42 18.43 18.42 10.17 0 18.42-8.25 18.42-18.42 0-10.18-8.25-18.43-18.42-18.43-10.18 0-18.43 8.25-18.43 18.43Z"></path>
              <path class="${classMap(knobStyles([11, 33, 55]))}"
                    d="M495.85 822.27c0 10.17 8.25 18.42 18.43 18.42 10.17 0 18.42-8.25 18.42-18.42 0-10.18-8.25-18.43-18.42-18.43-10.18 0-18.43 8.25-18.43 18.43"></path>
              <path fill="none" stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".5"
                    d="M495.85 822.27c0 10.17 8.25 18.42 18.43 18.42 10.17 0 18.42-8.25 18.42-18.42 0-10.18-8.25-18.43-18.42-18.43-10.18 0-18.43 8.25-18.43 18.43Z"></path>
              <path class="${classMap(knobStyles([12, 34, 56]))}"
                    d="M241.95 710.46c0 10.18 8.25 18.43 18.42 18.43 10.18 0 18.43-8.25 18.43-18.43 0-10.17-8.25-18.42-18.43-18.42-10.17 0-18.42 8.25-18.42 18.42"></path>
              <path fill="none" stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".5"
                    d="M241.95 710.46c0 10.18 8.25 18.43 18.42 18.43 10.18 0 18.43-8.25 18.43-18.43 0-10.17-8.25-18.42-18.43-18.42-10.17 0-18.42 8.25-18.42 18.42Z"></path>
              <path class="${classMap(knobStyles([13, 35, 57]))}"
                    d="M325.3 710.46c0 10.18 8.25 18.43 18.43 18.43 10.17 0 18.42-8.25 18.42-18.43 0-10.17-8.25-18.42-18.42-18.42-10.18 0-18.43 8.25-18.43 18.42"></path>
              <path fill="none" stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".5"
                    d="M325.3 710.46c0 10.18 8.25 18.43 18.43 18.43 10.17 0 18.42-8.25 18.42-18.43 0-10.17-8.25-18.42-18.42-18.42-10.18 0-18.43 8.25-18.43 18.42Z"></path>
              <path class="${classMap(knobStyles([14, 36, 58]))}"
                    d="M410.6 710.46c0 10.18 8.25 18.43 18.43 18.43 10.17 0 18.42-8.25 18.42-18.43 0-10.17-8.25-18.42-18.42-18.42-10.18 0-18.43 8.25-18.43 18.42"></path>
              <path fill="none" stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".5"
                    d="M410.6 710.46c0 10.18 8.25 18.43 18.43 18.43 10.17 0 18.42-8.25 18.42-18.43 0-10.17-8.25-18.42-18.42-18.42-10.18 0-18.43 8.25-18.43 18.42Z"></path>
              <path class="${classMap(knobStyles([15, 37, 59]))}"
                    d="M495.85 710.46c0 10.18 8.25 18.43 18.43 18.43 10.17 0 18.42-8.25 18.42-18.43 0-10.17-8.25-18.42-18.42-18.42-10.18 0-18.43 8.25-18.43 18.42"></path>
              <path fill="none" stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".5"
                    d="M495.85 710.46c0 10.18 8.25 18.43 18.43 18.43 10.17 0 18.42-8.25 18.42-18.43 0-10.17-8.25-18.42-18.42-18.42-10.18 0-18.43 8.25-18.43 18.42Z"></path>
              <a href="#ctrl-${channel}-52">
                  <path class="${classMap(btnStyles([52, 88, 124]))}"
                        d="M240.05 984.95c0 1.95 1.59 3.54 3.54 3.54h31.17c1.95 0 3.54-1.59 3.54-3.54v-14.17c0-1.95-1.59-3.54-3.54-3.54h-31.17c-1.95 0-3.54 1.59-3.54 3.54z"></path>
              </a>
              <path fill="none" stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".5"
                    d="M240.05 984.95c0 1.95 1.59 3.54 3.54 3.54h31.17c1.95 0 3.54-1.59 3.54-3.54v-14.17c0-1.95-1.59-3.54-3.54-3.54h-31.17c-1.95 0-3.54 1.59-3.54 3.54z"></path>
              <a href="#ctrl-${channel}-53">
                  <path class="${classMap(btnStyles([53, 89, 125]))}"
                        d="M325.3 984.95c0 1.95 1.59 3.54 3.54 3.54h31.17c1.95 0 3.54-1.59 3.54-3.54v-14.17c0-1.95-1.59-3.54-3.54-3.54h-31.17c-1.95 0-3.54 1.59-3.54 3.54z"></path>
              </a>
              <path fill="none" stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".5"
                    d="M325.3 984.95c0 1.95 1.59 3.54 3.54 3.54h31.17c1.95 0 3.54-1.59 3.54-3.54v-14.17c0-1.95-1.59-3.54-3.54-3.54h-31.17c-1.95 0-3.54 1.59-3.54 3.54z"></path>
              <a href="#ctrl-${channel}-54">
                  <path class="${classMap(btnStyles([54, 90, 126]))}"
                        d="M410.6 984.95c0 1.95 1.59 3.54 3.54 3.54h31.17a3.547 3.547 0 0 0 3.54-3.54v-14.17c0-1.95-1.59-3.54-3.54-3.54h-31.17c-1.95 0-3.54 1.59-3.54 3.54z"></path>
              </a>
              <path fill="none" stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".5"
                    d="M410.6 984.95c0 1.95 1.59 3.54 3.54 3.54h31.17a3.547 3.547 0 0 0 3.54-3.54v-14.17c0-1.95-1.59-3.54-3.54-3.54h-31.17c-1.95 0-3.54 1.59-3.54 3.54z"></path>
              <a href="#ctrl-${channel}-55">
                  <path class="${classMap(btnStyles([55, 91, 127]))}"
                        d="M495.85 984.95c0 1.95 1.59 3.54 3.54 3.54h31.17c1.95 0 3.54-1.59 3.54-3.54v-14.17c0-1.95-1.59-3.54-3.54-3.54h-31.17a3.547 3.547 0 0 0-3.54 3.54z"></path>
              </a>
              <path fill="none" stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".5"
                    d="M495.85 984.95c0 1.95 1.59 3.54 3.54 3.54h31.17c1.95 0 3.54-1.59 3.54-3.54v-14.17c0-1.95-1.59-3.54-3.54-3.54h-31.17a3.547 3.547 0 0 0-3.54 3.54z"></path>
              <a href="#ctrl-${channel}-48">
                  <path class="${classMap(btnStyles([48, 84, 120]))}"
                        d="M232.5 889.97c0 3.13 2.54 5.67 5.67 5.67h42.51c3.13 0 5.67-2.54 5.67-5.67v-22.66c0-3.13-2.54-5.67-5.67-5.67h-42.51c-3.13 0-5.67 2.54-5.67 5.67z"></path>
              </a>
              <path fill="none" stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".5"
                    d="M232.5 889.97c0 3.13 2.54 5.67 5.67 5.67h42.51c3.13 0 5.67-2.54 5.67-5.67v-22.66c0-3.13-2.54-5.67-5.67-5.67h-42.51c-3.13 0-5.67 2.54-5.67 5.67z"></path>
              <a href="#ctrl-${channel}-49">
                  <path class="${classMap(btnStyles([49, 85, 121]))}"
                        d="M317.75 889.97c0 3.13 2.54 5.67 5.67 5.67h42.51c3.13 0 5.67-2.54 5.67-5.67v-22.66c0-3.13-2.54-5.67-5.67-5.67h-42.51c-3.13 0-5.67 2.54-5.67 5.67z"></path>
              </a>
              <path fill="none" stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".5"
                    d="M317.75 889.97c0 3.13 2.54 5.67 5.67 5.67h42.51c3.13 0 5.67-2.54 5.67-5.67v-22.66c0-3.13-2.54-5.67-5.67-5.67h-42.51c-3.13 0-5.67 2.54-5.67 5.67z"></path>
              <a href="#ctrl-${channel}-50">
                  <path class="${classMap(btnStyles([50, 86, 122]))}"
                        d="M403 889.97c0 3.13 2.54 5.67 5.67 5.67h42.51c3.13 0 5.67-2.54 5.67-5.67v-22.66c0-3.13-2.54-5.67-5.67-5.67h-42.51c-3.13 0-5.67 2.54-5.67 5.67z"></path>
              </a>
              <path fill="none" stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".5"
                    d="M403 889.97c0 3.13 2.54 5.67 5.67 5.67h42.51c3.13 0 5.67-2.54 5.67-5.67v-22.66c0-3.13-2.54-5.67-5.67-5.67h-42.51c-3.13 0-5.67 2.54-5.67 5.67z"></path>
              <a href="#ctrl-${channel}-51">
                  <path class="${classMap(btnStyles([51, 87, 123]))}"
                        d="M488.25 889.97c0 3.13 2.54 5.67 5.67 5.67h42.51c3.13 0 5.67-2.54 5.67-5.67v-22.66c0-3.13-2.54-5.67-5.67-5.67h-42.51c-3.13 0-5.67 2.54-5.67 5.67z"></path>
              </a>
              <path fill="none" stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".5"
                    d="M488.25 889.97c0 3.13 2.54 5.67 5.67 5.67h42.51c3.13 0 5.67-2.54 5.67-5.67v-22.66c0-3.13-2.54-5.67-5.67-5.67h-42.51c-3.13 0-5.67 2.54-5.67 5.67z"></path>
              <a href="#ctrl-${channel}-44">
                  <path class="${classMap(btnStyles([44, 80, 116]))}"
                        d="M232.5 778.17c0 3.13 2.54 5.67 5.67 5.67h42.51c3.13 0 5.67-2.54 5.67-5.67v-22.66c0-3.13-2.54-5.67-5.67-5.67h-42.51c-3.13 0-5.67 2.54-5.67 5.67z"></path>
              </a>
              <path fill="none" stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".5"
                    d="M232.5 778.17c0 3.13 2.54 5.67 5.67 5.67h42.51c3.13 0 5.67-2.54 5.67-5.67v-22.66c0-3.13-2.54-5.67-5.67-5.67h-42.51c-3.13 0-5.67 2.54-5.67 5.67z"></path>
              <a href="#ctrl-${channel}-45">
                  <path class="${classMap(btnStyles([45, 81, 117]))}"
                        d="M317.75 778.17c0 3.13 2.54 5.67 5.67 5.67h42.51c3.13 0 5.67-2.54 5.67-5.67v-22.66c0-3.13-2.54-5.67-5.67-5.67h-42.51c-3.13 0-5.67 2.54-5.67 5.67z"></path>
              </a>
              <path fill="none" stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".5"
                    d="M317.75 778.17c0 3.13 2.54 5.67 5.67 5.67h42.51c3.13 0 5.67-2.54 5.67-5.67v-22.66c0-3.13-2.54-5.67-5.67-5.67h-42.51c-3.13 0-5.67 2.54-5.67 5.67z"></path>
              <a href="#ctrl-${channel}-46">
                  <path class="${classMap(btnStyles([46, 82, 118]))}"
                        d="M403 778.17c0 3.13 2.54 5.67 5.67 5.67h42.51c3.13 0 5.67-2.54 5.67-5.67v-22.66c0-3.13-2.54-5.67-5.67-5.67h-42.51c-3.13 0-5.67 2.54-5.67 5.67z"></path>
              </a>
              <path fill="none" stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".5"
                    d="M403 778.17c0 3.13 2.54 5.67 5.67 5.67h42.51c3.13 0 5.67-2.54 5.67-5.67v-22.66c0-3.13-2.54-5.67-5.67-5.67h-42.51c-3.13 0-5.67 2.54-5.67 5.67z"></path>
              <a href="#ctrl-${channel}-47">
                  <path class="${classMap(btnStyles([47, 83, 119]))}"
                        d="M488.25 778.17c0 3.13 2.54 5.67 5.67 5.67h42.51c3.13 0 5.67-2.54 5.67-5.67v-22.66c0-3.13-2.54-5.67-5.67-5.67h-42.51c-3.13 0-5.67 2.54-5.67 5.67z"></path>
              </a>
              <path fill="none" stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".5"
                    d="M488.25 778.17c0 3.13 2.54 5.67 5.67 5.67h42.51c3.13 0 5.67-2.54 5.67-5.67v-22.66c0-3.13-2.54-5.67-5.67-5.67h-42.51c-3.13 0-5.67 2.54-5.67 5.67z"></path>
              <a href="#ctrl-${channel}-40">
                  <path class="${classMap(btnStyles([40, 76, 112]))}"
                        d="M232.5 668.27c0 3.13 2.54 5.67 5.67 5.67h42.51c3.13 0 5.67-2.54 5.67-5.67v-22.66c0-3.13-2.54-5.67-5.67-5.67h-42.51c-3.13 0-5.67 2.54-5.67 5.67z"></path>
              </a>
              <path fill="none" stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".5"
                    d="M232.5 668.27c0 3.13 2.54 5.67 5.67 5.67h42.51c3.13 0 5.67-2.54 5.67-5.67v-22.66c0-3.13-2.54-5.67-5.67-5.67h-42.51c-3.13 0-5.67 2.54-5.67 5.67z"></path>
              <a href="#ctrl-${channel}-41">
                  <path class="${classMap(btnStyles([41, 77, 113]))}"
                        d="M317.75 668.27c0 3.13 2.54 5.67 5.67 5.67h42.51c3.13 0 5.67-2.54 5.67-5.67v-22.66c0-3.13-2.54-5.67-5.67-5.67h-42.51c-3.13 0-5.67 2.54-5.67 5.67z"></path>
              </a>
              <path fill="none" stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".5"
                    d="M317.75 668.27c0 3.13 2.54 5.67 5.67 5.67h42.51c3.13 0 5.67-2.54 5.67-5.67v-22.66c0-3.13-2.54-5.67-5.67-5.67h-42.51c-3.13 0-5.67 2.54-5.67 5.67z"></path>
              <a href="#ctrl-${channel}-42">
                  <path class="${classMap(btnStyles([42, 78, 114]))}"
                        d="M403 668.27c0 3.13 2.54 5.67 5.67 5.67h42.51c3.13 0 5.67-2.54 5.67-5.67v-22.66c0-3.13-2.54-5.67-5.67-5.67h-42.51c-3.13 0-5.67 2.54-5.67 5.67z"></path>
              </a>
              <path fill="none" stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".5"
                    d="M403 668.27c0 3.13 2.54 5.67 5.67 5.67h42.51c3.13 0 5.67-2.54 5.67-5.67v-22.66c0-3.13-2.54-5.67-5.67-5.67h-42.51c-3.13 0-5.67 2.54-5.67 5.67z"></path>
              <a href="#ctrl-${channel}-43">
                  <path class="${classMap(btnStyles([43, 79, 115]))}"
                        d="M488.25 668.27c0 3.13 2.54 5.67 5.67 5.67h42.51c3.13 0 5.67-2.54 5.67-5.67v-22.66c0-3.13-2.54-5.67-5.67-5.67h-42.51c-3.13 0-5.67 2.54-5.67 5.67z"></path>
              </a>
              <path fill="none" stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".5"
                    d="M488.25 668.27c0 3.13 2.54 5.67 5.67 5.67h42.51c3.13 0 5.67-2.54 5.67-5.67v-22.66c0-3.13-2.54-5.67-5.67-5.67h-42.51c-3.13 0-5.67 2.54-5.67 5.67z"></path>
              <path fill="#bfbfbf" fill-rule="evenodd" stroke="#000" stroke-linejoin="round" stroke-miterlimit="10"
                    stroke-width=".5"
                    d="M255.2 405.39h8.5v192.75h-8.5zm85.3 0h8.5v192.75h-8.5zm85.25 0h8.5v192.75h-8.5zm85.25 0h8.5v192.75H511Z"></path>
              <a href="#ctrl-${channel}-36">
                  <path class="${classMap(btnStyles([36, 72, 108]))}"
                        d="M232.5 355.67c0 3.13 2.54 5.67 5.67 5.67h42.51c3.13 0 5.67-2.54 5.67-5.67v-22.66c0-3.13-2.54-5.67-5.67-5.67h-42.51c-3.13 0-5.67 2.54-5.67 5.67z"></path>
              </a>
              <path fill="none" stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".5"
                    d="M232.5 355.67c0 3.13 2.54 5.67 5.67 5.67h42.51c3.13 0 5.67-2.54 5.67-5.67v-22.66c0-3.13-2.54-5.67-5.67-5.67h-42.51c-3.13 0-5.67 2.54-5.67 5.67z"></path>
              <a href="#ctrl-${channel}-37">
                  <path class="${classMap(btnStyles([37, 73, 109]))}"
                        d="M317.75 355.67c0 3.13 2.54 5.67 5.67 5.67h42.51c3.13 0 5.67-2.54 5.67-5.67v-22.66c0-3.13-2.54-5.67-5.67-5.67h-42.51c-3.13 0-5.67 2.54-5.67 5.67z"></path>
              </a>
              <path fill="none" stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".5"
                    d="M317.75 355.67c0 3.13 2.54 5.67 5.67 5.67h42.51c3.13 0 5.67-2.54 5.67-5.67v-22.66c0-3.13-2.54-5.67-5.67-5.67h-42.51c-3.13 0-5.67 2.54-5.67 5.67z"></path>
              <a href="#ctrl-${channel}-38">
                  <path class="${classMap(btnStyles([38, 74, 110]))}"
                        d="M403 355.67c0 3.13 2.54 5.67 5.67 5.67h42.51c3.13 0 5.67-2.54 5.67-5.67v-22.66c0-3.13-2.54-5.67-5.67-5.67h-42.51c-3.13 0-5.67 2.54-5.67 5.67z"></path>
              </a>
              <path fill="none" stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".5"
                    d="M403 355.67c0 3.13 2.54 5.67 5.67 5.67h42.51c3.13 0 5.67-2.54 5.67-5.67v-22.66c0-3.13-2.54-5.67-5.67-5.67h-42.51c-3.13 0-5.67 2.54-5.67 5.67z"></path>
              <a href="#ctrl-${channel}-39">
                  <path class="${classMap(btnStyles([39, 75, 111]))}"
                        d="M488.25 355.67c0 3.13 2.54 5.67 5.67 5.67h42.51c3.13 0 5.67-2.54 5.67-5.67v-22.66c0-3.13-2.54-5.67-5.67-5.67h-42.51c-3.13 0-5.67 2.54-5.67 5.67z"></path>
              </a>
              <path fill="none" stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".5"
                    d="M488.25 355.67c0 3.13 2.54 5.67 5.67 5.67h42.51c3.13 0 5.67-2.54 5.67-5.67v-22.66c0-3.13-2.54-5.67-5.67-5.67h-42.51c-3.13 0-5.67 2.54-5.67 5.67z"></path>
              <a href="#ctrl-${channel}-32">
                  <path class="${classMap(btnStyles([32, 68, 104]))}"
                        d="M232.5 312.07c0 3.13 2.54 5.67 5.67 5.67h42.51c3.13 0 5.67-2.54 5.67-5.67v-22.66c0-3.13-2.54-5.67-5.67-5.67h-42.51c-3.13 0-5.67 2.54-5.67 5.67z"></path>
              </a>
              <path fill="none" stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".5"
                    d="M232.5 312.07c0 3.13 2.54 5.67 5.67 5.67h42.51c3.13 0 5.67-2.54 5.67-5.67v-22.66c0-3.13-2.54-5.67-5.67-5.67h-42.51c-3.13 0-5.67 2.54-5.67 5.67z"></path>
              <a href="#ctrl-${channel}-33">
                  <path class="${classMap(btnStyles([33, 69, 105]))}"
                        d="M317.75 312.07c0 3.13 2.54 5.67 5.67 5.67h42.51c3.13 0 5.67-2.54 5.67-5.67v-22.66c0-3.13-2.54-5.67-5.67-5.67h-42.51c-3.13 0-5.67 2.54-5.67 5.67z"></path>
              </a>
              <path fill="none" stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".5"
                    d="M317.75 312.07c0 3.13 2.54 5.67 5.67 5.67h42.51c3.13 0 5.67-2.54 5.67-5.67v-22.66c0-3.13-2.54-5.67-5.67-5.67h-42.51c-3.13 0-5.67 2.54-5.67 5.67z"></path>
              <a href="#ctrl-${channel}-34">
                  <path class="${classMap(btnStyles([34, 70, 106]))}"
                        d="M403 312.07c0 3.13 2.54 5.67 5.67 5.67h42.51c3.13 0 5.67-2.54 5.67-5.67v-22.66c0-3.13-2.54-5.67-5.67-5.67h-42.51c-3.13 0-5.67 2.54-5.67 5.67z"></path>
              </a>
              <path fill="none" stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".5"
                    d="M403 312.07c0 3.13 2.54 5.67 5.67 5.67h42.51c3.13 0 5.67-2.54 5.67-5.67v-22.66c0-3.13-2.54-5.67-5.67-5.67h-42.51c-3.13 0-5.67 2.54-5.67 5.67z"></path>
              <a href="#ctrl-${channel}-35">
                  <path class="${classMap(btnStyles([35, 71, 107]))}"
                        d="M488.25 312.07c0 3.13 2.54 5.67 5.67 5.67h42.51c3.13 0 5.67-2.54 5.67-5.67v-22.66c0-3.13-2.54-5.67-5.67-5.67h-42.51c-3.13 0-5.67 2.54-5.67 5.67z"></path>
              </a>
              <path fill="none" stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".5"
                    d="M488.25 312.07c0 3.13 2.54 5.67 5.67 5.67h42.51c3.13 0 5.67-2.54 5.67-5.67v-22.66c0-3.13-2.54-5.67-5.67-5.67h-42.51c-3.13 0-5.67 2.54-5.67 5.67z"></path>
              <a href="#ctrl-${channel}-28">
                  <path class="${classMap(btnStyles([28, 64, 100]))}"
                        d="M232.5 266.62c0 3.13 2.54 5.67 5.67 5.67h42.51c3.13 0 5.67-2.54 5.67-5.67v-22.66c0-3.13-2.54-5.67-5.67-5.67h-42.51c-3.13 0-5.67 2.54-5.67 5.67z"></path>
              </a>
              <path fill="none" stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".5"
                    d="M232.5 266.62c0 3.13 2.54 5.67 5.67 5.67h42.51c3.13 0 5.67-2.54 5.67-5.67v-22.66c0-3.13-2.54-5.67-5.67-5.67h-42.51c-3.13 0-5.67 2.54-5.67 5.67z"></path>
              <a href="#ctrl-${channel}-29">
                  <path class="${classMap(btnStyles([29, 65, 101]))}"
                        d="M317.75 266.62c0 3.13 2.54 5.67 5.67 5.67h42.51c3.13 0 5.67-2.54 5.67-5.67v-22.66c0-3.13-2.54-5.67-5.67-5.67h-42.51c-3.13 0-5.67 2.54-5.67 5.67z"></path>
              </a>
              <path fill="none" stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".5"
                    d="M317.75 266.62c0 3.13 2.54 5.67 5.67 5.67h42.51c3.13 0 5.67-2.54 5.67-5.67v-22.66c0-3.13-2.54-5.67-5.67-5.67h-42.51c-3.13 0-5.67 2.54-5.67 5.67z"></path>
              <a href="#ctrl-${channel}-30">
                  <path class="${classMap(btnStyles([30, 66, 102]))}"
                        d="M403 266.62c0 3.13 2.54 5.67 5.67 5.67h42.51c3.13 0 5.67-2.54 5.67-5.67v-22.66c0-3.13-2.54-5.67-5.67-5.67h-42.51c-3.13 0-5.67 2.54-5.67 5.67z"></path>
              </a>
              <path fill="none" stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".5"
                    d="M403 266.62c0 3.13 2.54 5.67 5.67 5.67h42.51c3.13 0 5.67-2.54 5.67-5.67v-22.66c0-3.13-2.54-5.67-5.67-5.67h-42.51c-3.13 0-5.67 2.54-5.67 5.67z"></path>
              <a href="#ctrl-${channel}-31">
                  <path class="${classMap(btnStyles([31, 67, 103]))}"
                        d="M488.25 266.62c0 3.13 2.54 5.67 5.67 5.67h42.51c3.13 0 5.67-2.54 5.67-5.67v-22.66c0-3.13-2.54-5.67-5.67-5.67h-42.51c-3.13 0-5.67 2.54-5.67 5.67z"></path>
              </a>
              <path fill="none" stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".5"
                    d="M488.25 266.62c0 3.13 2.54 5.67 5.67 5.67h42.51c3.13 0 5.67-2.54 5.67-5.67v-22.66c0-3.13-2.54-5.67-5.67-5.67h-42.51c-3.13 0-5.67 2.54-5.67 5.67z"></path>
              <a href="#ctrl-${channel}-24">
                  <path class="${classMap(btnStyles([24, 60, 96]))}"
                        d="M232.5 221.12c0 3.13 2.54 5.67 5.67 5.67h42.51c3.13 0 5.67-2.54 5.67-5.67v-22.66c0-3.13-2.54-5.67-5.67-5.67h-42.51c-3.13 0-5.67 2.54-5.67 5.67z"></path>
              </a>
              <path fill="none" stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".5"
                    d="M232.5 221.12c0 3.13 2.54 5.67 5.67 5.67h42.51c3.13 0 5.67-2.54 5.67-5.67v-22.66c0-3.13-2.54-5.67-5.67-5.67h-42.51c-3.13 0-5.67 2.54-5.67 5.67z"></path>
              <a href="#ctrl-${channel}-25">
                  <path class="${classMap(btnStyles([25, 61, 97]))}"
                        d="M317.75 221.12c0 3.13 2.54 5.67 5.67 5.67h42.51c3.13 0 5.67-2.54 5.67-5.67v-22.66c0-3.13-2.54-5.67-5.67-5.67h-42.51c-3.13 0-5.67 2.54-5.67 5.67z"></path>
              </a>
              <path fill="none" stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".5"
                    d="M317.75 221.12c0 3.13 2.54 5.67 5.67 5.67h42.51c3.13 0 5.67-2.54 5.67-5.67v-22.66c0-3.13-2.54-5.67-5.67-5.67h-42.51c-3.13 0-5.67 2.54-5.67 5.67z"></path>
              <a href="#ctrl-${channel}-26">
                  <path class="${classMap(btnStyles([26, 62, 98]))}"
                        d="M403 221.12c0 3.13 2.54 5.67 5.67 5.67h42.51c3.13 0 5.67-2.54 5.67-5.67v-22.66c0-3.13-2.54-5.67-5.67-5.67h-42.51c-3.13 0-5.67 2.54-5.67 5.67z"></path>
              </a>
              <path fill="none" stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".5"
                    d="M403 221.12c0 3.13 2.54 5.67 5.67 5.67h42.51c3.13 0 5.67-2.54 5.67-5.67v-22.66c0-3.13-2.54-5.67-5.67-5.67h-42.51c-3.13 0-5.67 2.54-5.67 5.67z"></path>
              <a href="#ctrl-${channel}-27">
                  <path class="${classMap(btnStyles([27, 63, 99]))}"
                        d="M488.25 221.12c0 3.13 2.54 5.67 5.67 5.67h42.51c3.13 0 5.67-2.54 5.67-5.67v-22.66c0-3.13-2.54-5.67-5.67-5.67h-42.51c-3.13 0-5.67 2.54-5.67 5.67z"></path>
              </a>
              <path fill="none" stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".5"
                    d="M488.25 221.12c0 3.13 2.54 5.67 5.67 5.67h42.51c3.13 0 5.67-2.54 5.67-5.67v-22.66c0-3.13-2.54-5.67-5.67-5.67h-42.51c-3.13 0-5.67 2.54-5.67 5.67z"></path>
              <a href="#ctrl-${channel}-12">
                  <path class="${classMap(btnStyles([12, 16, 20]))}"
                        d="M232.5 164.77c0 4.95 4.02 8.97 8.98 8.97h35.89c4.96 0 8.98-4.02 8.98-8.97v-35.9a8.98 8.98 0 0 0-8.98-8.98h-35.89a8.98 8.98 0 0 0-8.98 8.98z"></path>
              </a>
              <path fill="none" stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".5"
                    d="M232.5 164.77c0 4.95 4.02 8.97 8.98 8.97h35.89c4.96 0 8.98-4.02 8.98-8.97v-35.9a8.98 8.98 0 0 0-8.98-8.98h-35.89a8.98 8.98 0 0 0-8.98 8.98z"></path>
              <a href="#ctrl-${channel}-15">
                  <path class="${classMap(btnStyles([15, 19, 23]))}"
                        d="M488.25 164.77c0 4.95 4.02 8.97 8.98 8.97h35.89c4.96 0 8.98-4.02 8.98-8.97v-35.9a8.98 8.98 0 0 0-8.98-8.98h-35.89a8.98 8.98 0 0 0-8.98 8.98z"></path>
              </a>
              <path fill="none" stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".5"
                    d="M488.25 164.77c0 4.95 4.02 8.97 8.98 8.97h35.89c4.96 0 8.98-4.02 8.98-8.97v-35.9a8.98 8.98 0 0 0-8.98-8.98h-35.89a8.98 8.98 0 0 0-8.98 8.98z"></path>
              <a href="#ctrl-${channel}-20-cc">
                  <path class="${classMap(
                    Object.assign(
                      knobStyles([20, 42, 68]),
                      btnStyles([13, 17, 21])
                    )
                  )}"
                        d="M325.3 145.86c0 10.18 8.25 18.43 18.43 18.43 10.17 0 18.42-8.25 18.42-18.43 0-10.17-8.25-18.42-18.42-18.42-10.18 0-18.43 8.25-18.43 18.42"></path>
              </a>
              <path fill="none" stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".5"
                    d="M325.3 145.86c0 10.18 8.25 18.43 18.43 18.43 10.17 0 18.42-8.25 18.42-18.43 0-10.17-8.25-18.42-18.42-18.42-10.18 0-18.43 8.25-18.43 18.42Z"></path>
              <a href="#ctrl-${channel}-21-cc">
                  <path class="${classMap(
                    Object.assign(
                      knobStyles([21, 43, 69]),
                      btnStyles([14, 18, 22])
                    )
                  )}"
                        d="M410.6 145.86c0 10.18 8.25 18.43 18.43 18.43 10.17 0 18.42-8.25 18.42-18.43 0-10.17-8.25-18.42-18.42-18.42-10.18 0-18.43 8.25-18.43 18.42"></path>
              </a>
              <path fill="none" stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".5"
                    d="M410.6 145.86c0 10.18 8.25 18.43 18.43 18.43 10.17 0 18.42-8.25 18.42-18.43 0-10.17-8.25-18.42-18.42-18.42-10.18 0-18.43 8.25-18.43 18.42Z"></path>
          </g>
      </svg>  `;
}

function template({ midi, selected }) {
  return html`
    <div class="canvas">
      <div class="mapping">
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
