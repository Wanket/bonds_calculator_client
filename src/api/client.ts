import BondInfo from "@/api/type/bond_info";

class ApiClient {
  async search(query: string): Promise<BondInfo[]> {
    return ApiClient.get(`/api/static/search?query=${query}`);
  }

  private static async get(url: string): Promise<any> {
    const response = await fetch(url);

    return response.json();
  }
}

export default new ApiClient();
