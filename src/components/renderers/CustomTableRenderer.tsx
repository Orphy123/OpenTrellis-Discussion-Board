// src/components/renderers/CustomTableRenderer.tsx
export default function CustomTableRenderer({ data }: { data: any }) {
    // data.content is [['A1','A2'], ['B1','B2'], …]
    if (!data?.content) return null;
  
    return (
      <div className="overflow-x-auto">
        <table className="border-collapse text-sm">
          <tbody>
            {data.content.map((row: string[], i: number) => (
              <tr key={i}>
                {row.map((cell: string, j: number) => (
                  <td key={j} className="border px-2 py-1">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  