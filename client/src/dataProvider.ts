import simpleRestProvider from 'ra-data-simple-rest';
import type { DataProvider } from 'react-admin';

const baseDataProvider = simpleRestProvider('/api');

export const dataProvider: DataProvider = {
  ...baseDataProvider,
  
  getOne: async (resource, params) => {
    if (resource === 'users/admin/all') {
      // Use the dedicated user details endpoint
      const url = `/api/users/admin/${params.id}`;
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return { data };
    }
    
    // For other resources, use the default behavior
    return baseDataProvider.getOne(resource, params);
  },
  
  getList: async (resource, params) => {
    if (resource === 'users/admin/all') {
      const page = params.pagination?.page ?? 1;
      const perPage = params.pagination?.perPage ?? 10;
      const { field, order } = params.sort ?? { field: undefined, order: undefined };
      
      // Build query parameters
      const query = new URLSearchParams({
        page: page.toString(),
        limit: perPage.toString(),
      });
      
      // Add sorting if specified
      if (field && order) {
        query.append('sort', `${field}:${order.toLowerCase()}`);
      }
      
      const url = `/api/users/admin/all?${query.toString()}`;
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      // Extract total from Content-Range header
      const contentRange = response.headers.get('Content-Range');
      const total = contentRange ? parseInt(contentRange.split('/')[1]) : data.length;
      
      return {
        data,
        total,
      };
    }
    
    // For other resources, use the default behavior
    return baseDataProvider.getList(resource, params);
  },
};