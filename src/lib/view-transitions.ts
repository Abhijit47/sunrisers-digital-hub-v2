import type {
  TransitionAnimationPair,
  TransitionDirectionalAnimations,
} from "astro";

const bumpAnimation: TransitionAnimationPair = {
  old: {
    name: "bump",
    duration: "0.5s",
    easing: "ease-in",
    direction: "reverse",
  },
  new: {
    name: "bump",
    duration: "0.5s",
    easing: "ease-in-out",
  },
};

export const bumpTransition: TransitionDirectionalAnimations = {
  forwards: bumpAnimation,
  backwards: bumpAnimation,
};

const pixeletedOutAnimation: TransitionAnimationPair = {
  old: {
    name: "pixeletedOut",
    duration: "0.5s",
    easing: "ease-in-out",
  },
  new: {
    name: "pixeletedIn",
    duration: "0.5s",
    easing: "ease-in-out",
  },
};

const pixeletedInAnimation: TransitionAnimationPair = {
  old: {
    name: "pixeletedIn",
    duration: "0.5s",
    easing: "ease-in-out",
  },
  new: {
    name: "pixeletedOut",
    duration: "0.5s",
    easing: "ease-in-out",
  },
};

export const pixeletedTransition: TransitionDirectionalAnimations = {
  forwards: pixeletedOutAnimation,
  backwards: pixeletedInAnimation,
};

const wipeInAnimation: TransitionAnimationPair = {
  old: {
    name: "wipeIn",
    duration: "0.5s",
    easing: "ease-in-out",
  },
  new: {
    name: "wipeOut",
    duration: "0.5s",
    easing: "ease-in-out",
  },
};

const wipeOutAnimation: TransitionAnimationPair = {
  old: {
    name: "wipeOut",
    duration: "0.5s",
    easing: "ease-in-out",
  },
  new: {
    name: "wipeIn",
    duration: "0.5s",
    easing: "ease-in-out",
  },
};

export const wipeTransition: TransitionDirectionalAnimations = {
  forwards: wipeInAnimation,
  backwards: wipeOutAnimation,
};
