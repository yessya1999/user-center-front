import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import { PLANET_LINK } from '@/constants';
const Footer: React.FC = () => {
  const defaultMessage = 'yess出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'planet',
          title: '知识星球',
          href: PLANET_LINK,
          blankTarget: true,
        },
        {
          key: 'github',
          title: (
            <>
              <GithubOutlined />
              yupi
            </>
          ),
          href: 'https://github.com/liyupi',
          blankTarget: true,
        },
        {
          key: 'codeNav',
          title: '编程导航',
          href: 'https://code-nav.cn',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
