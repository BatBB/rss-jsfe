export default function btnDisabled(btnClassName: string, state: boolean) {
  const btn = <HTMLButtonElement>document.querySelector(`.${btnClassName}`);
  btn.disabled = state;
}
