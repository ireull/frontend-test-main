import { Input } from '@/shared/components/ui/Input';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchInput = ({ value, onChange }: SearchInputProps) => {
  return (
    <Input
      name="login"
      label="Логин GitHub"
      placeholder="Введите логин для поиска репозиториев"
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  );
};
