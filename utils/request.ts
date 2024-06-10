const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

const fetchProperties = async () => {
  try {
    if (!apiDomain) return [];

    const res = await fetch(`${apiDomain}/properties`);

    if (!res.ok) {
      throw new Error("failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.log(error);
    return [];
  }
};

export { fetchProperties };
