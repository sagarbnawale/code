<Section title="Lease Information">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <Input label="Tenant Name" value={formData.tenantName} />
    <Select label="Source" options={sources} />

    <Input label="Current Gross Amount" value="$850.00" />
    <Select label="Lease Frequency" options={['12 (Months)']} />

    <DateInput label="Lease Begin" value={formData.leaseBegin} />
    <DateInput label="Current FLE" value={formData.currentFle} disabled />
  </div>

  <div className="mt-3 flex items-center gap-2">
    <Checkbox checked />
    <span className="text-sm text-gray-600">Still Running</span>
  </div>
</Section>


<Section title="Escalation Information">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <Select label="Escalation Type" options={['Fixed %']} />
    <Select label="Escalation Freq" options={['12 (Months)']} />

    <Input label="Escalation Rate" value="2.5%" />
    <DateInput label="Next / First Escalation" value="09/22/2025" />

    <DateInput label="Escalation End" value="10/25/2025" />
  </div>
</Section>

<Section title="Escalation Information">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <Select label="Escalation Type" options={['Fixed %']} />
    <Select label="Escalation Freq (months)" options={['36']} />

    <Input label="Escalation Rate" value="3%" />
    <DateInput label="Next / First Escalation" value="10/26/2025" />
    <DateInput label="Escalation End" value="10/25/2028" />
  </div>
</Section>
