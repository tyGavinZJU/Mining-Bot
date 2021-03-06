import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { ConfigProvider } from 'antd';

import { switchConfigProviderLocale } from '@/services/locale';
import AddAccountForm from './components/AddAccountForm';

import WalletTable from './components/walletTable';

const TableList: React.FC<{}> = () => {



  return (
    <PageContainer>
      <ConfigProvider
        locale={switchConfigProviderLocale()}
      >

        <WalletTable />
        <AddAccountForm />
      </ConfigProvider>
    </PageContainer >
  );
};

export default TableList;
