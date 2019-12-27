// URL에 따라 보여줄 컴포넌트들의 모음
import withSplitting from '../utils/withSplitting'

export const Home = withSplitting(() => import('./Home'))
export const About = withSplitting(() => import('./About'))
