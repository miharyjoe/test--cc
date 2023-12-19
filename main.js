import promptSync from "prompt-sync";
import { displayMenu } from "./menu.js";

const prompt = promptSync();

const MESSAGES = {
  RICE_ADDED: "Rice has been added.",
  RICE_ALREADY_PRESENT: "There's already rice in the rice cooker.",
  COOKING_RICE: "Cooking rice...",
  RICE_COOKED: "The rice has been cooked!",
  CANNOT_COOK_EMPTY: "Cannot cook. The rice cooker is empty.",
  RICE_ALREADY_COOKED: "The rice is already cooked.",
  STEAMING_IN_PROGRESS: "Steaming in progress...",
  STEAMING_COMPLETED: "Steaming completed!",
  CANNOT_STEAM_EMPTY: "Cannot steam. The rice cooker is empty.",
  STEAMING_ALREADY_IN_PROGRESS: "Steaming is already in progress.",
  KEEP_WARM_STARTED: "The rice is now being kept warm.",
  CANNOT_KEEP_WARM_EMPTY: "Cannot keep warm. The rice cooker is empty.",
  CANNOT_KEEP_WARM_UNCOOKED: "Cannot keep warm. The rice is not cooked.",
  KEEP_WARM_ALREADY_IN_PROGRESS: "Keeping warm is already in progress.",
  REMOVE_RICE_SUCCESS: "The rice has been removed from the rice cooker.",
  NO_RICE_TO_REMOVE: "There's no rice to remove or it is not cooked yet.",
  THANK_YOU_MESSAGE: "Thank you for using the Rice Cooker Simulator. Goodbye!",
  INVALID_CHOICE: "Invalid choice. Please select a valid option.",
  INVALID_INPUT: "Invalid input. Please enter a valid number.",
  NO_INPUT_PROVIDED: "No input provided.",
};

export const riceCooker = {
  ricePresent: false,
  riceCooked: false,
  steamingInProgress: false,
  heatingInProgress: false,

  addRice() {
    if (!this.ricePresent) {
      this.ricePresent = true;
      console.log(MESSAGES.RICE_ADDED);
    } else {
      console.log(MESSAGES.RICE_ALREADY_PRESENT);
    }
  },

  cookRice() {
    if (this.ricePresent && !this.riceCooked) {
      console.log(MESSAGES.COOKING_RICE);
      this.delaySync(1500);
      this.riceCooked = true;
      console.log(MESSAGES.RICE_COOKED);
    } else if (!this.ricePresent) {
      console.log(MESSAGES.CANNOT_COOK_EMPTY);
    } else {
      console.log(MESSAGES.RICE_ALREADY_COOKED);
    }
  },

  steam() {
    if (this.ricePresent && !this.steamingInProgress) {
      console.log(MESSAGES.STEAMING_IN_PROGRESS);
      this.steamingInProgress = true;
      this.delaySync(1500);
      this.steamingInProgress = false;
      console.log(MESSAGES.STEAMING_COMPLETED);
    } else if (!this.ricePresent) {
      console.log(MESSAGES.CANNOT_STEAM_EMPTY);
    } else {
      console.log(MESSAGES.STEAMING_ALREADY_IN_PROGRESS);
    }
  },

  keepWarm() {
    if (this.ricePresent && this.riceCooked && !this.heatingInProgress) {
      console.log(MESSAGES.KEEP_WARM_STARTED);
      this.heatingInProgress = true;
    } else if (!this.ricePresent) {
      console.log(MESSAGES.CANNOT_KEEP_WARM_EMPTY);
    } else if (!this.riceCooked) {
      console.log(MESSAGES.CANNOT_KEEP_WARM_UNCOOKED);
    } else {
      console.log(MESSAGES.KEEP_WARM_ALREADY_IN_PROGRESS);
    }
  },

  removeRice() {
    if (this.ricePresent && (this.riceCooked || this.heatingInProgress)) {
      this.ricePresent = false;
      this.riceCooked = false;
      this.steamingInProgress = false;
      this.heatingInProgress = false;
      console.log(MESSAGES.REMOVE_RICE_SUCCESS);
    } else {
      console.log(MESSAGES.NO_RICE_TO_REMOVE);
    }
  },

  delaySync(ms) {
    const start = Date.now();
    while (Date.now() - start < ms) {}
  },

  performAction(choice) {
    switch (choice) {
      case 1:
        this.addRice();
        break;
      case 2:
        this.cookRice();
        break;
      case 3:
        this.steam();
        break;
      case 4:
        this.keepWarm();
        break;
      case 5:
        this.removeRice();
        break;
      default:
        console.log(MESSAGES.INVALID_CHOICE);
    }
  },
};

export function simulateRiceCooker() {
  const condition = true;

  while (condition) {
    displayMenu();
    const input = prompt("Enter your choice: ");

    if (!input) {
      console.log(MESSAGES.NO_INPUT_PROVIDED);
      continue;
    }

    const choice = parseInt(input);

    if (isNaN(choice) || choice < 1 || choice > 6) {
      console.log(MESSAGES.INVALID_CHOICE);
      continue;
    }

    if (choice === 6) {
      console.log(MESSAGES.THANK_YOU_MESSAGE);
      break;
    }

    riceCooker.performAction(choice);
  }
}
