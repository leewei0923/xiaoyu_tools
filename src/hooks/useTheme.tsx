import { useAppSelector } from '@src/redux/hooks';
import { selectTheme } from '@src/redux/theme/themeSlice';

export const useTheme = (): 'light' | 'dark' => {
  const themeState = useAppSelector(selectTheme);

  return themeState;
};
