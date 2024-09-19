import { AppDispatch, RootState } from '@/store/store';
import {
  useDispatch as useNativeDispatch,
  useSelector as useNativeSelector,
} from 'react-redux';

export const useDispatch = useNativeDispatch.withTypes<AppDispatch>();
export const useSelector = useNativeSelector.withTypes<RootState>();
