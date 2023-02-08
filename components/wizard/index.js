import { WizardButton, WizardContent, WizardTitle } from "./elements";
import RecapBar, { FontSwitcher, ThemeSwitcher } from "./RecapBar";

export function hero({
    posts,
    data,
    setData,
    page,
    handleInput,
}) {
    return (
      <WizardContent>
        <WizardTitle>Review your choices</WizardTitle>
        <RecapBar ... />
      </WizardContent>
    );
  }
