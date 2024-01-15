type TAppButtonProps = {
  onClick: () => void;
};
export function AppButton({ onClick }: TAppButtonProps) {
  return (
    <button data-testid="app-button" onClick={onClick}>
      Click
    </button>
  );
}
