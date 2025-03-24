// components/dashboard/StatCard.tsx
type StatCardProps = {
  title: string;
  value: number | string;
  icon: React.ReactNode;
  change?: string;
  changeType?: "positive" | "negative";
};

export function StatCard({
  title,
  value,
  icon,
  change,
  changeType,
}: StatCardProps) {
  return (
    <div className="bg-card-bg rounded-lg shadow p-5 text-card-text">
      <div className="flex justify-between">
        <div>
          <p className="text-sm">{title}</p>
          <h3 className="text-2xl font-bold mt-1 text-card-heading">{value}</h3>

          {change && (
            <p
              className={`text-sm ${
                changeType === "positive"
                  ? "text-green-500 dark:text-green-400"
                  : "text-red-500 dark:text-red-400"
              }`}
            >
              {change}
            </p>
          )}
        </div>
        <div className="text-blue-500 dark:text-blue-400">{icon}</div>
      </div>
    </div>
  );
}
