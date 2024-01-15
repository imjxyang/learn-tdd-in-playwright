type TAppInputProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function AppInput({ value, onChange }: TAppInputProps) {
  return <input data-testid="app-input" value={value} onChange={onChange} />;
}
